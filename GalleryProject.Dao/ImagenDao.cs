using AutoMapper;
using GalleryProject.Dao.Contracts;
using Domain = GalleryProject.Domain;
using Entity = GalleryProject.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using GalleryProject.Common.Enums;
using GalleryProject.Repository;
using System.Linq;
using GalleryProject.Domain;
using System.Security.Cryptography.X509Certificates;
using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;

namespace GalleryProject.Dao
{
    public class ImagenDao : IImagenDao
    {
        private readonly IMapper mapper;

        public ImagenDao (IMapper mapper)
        {
            this.mapper = mapper;
        }

        public Domain.Imagen ObtenerImagenPor(int idImagen)
        {
            var imagen = new Entity.Imagen()
            {
                Nombre = "Imagen de Prueba",
                Descripcion = "La mejor imagen de prueba",
                PortadaId = 3,
                AlbumId = 3,
                Ruta = "C:/rutaImportante/Imagen de Prueba.jpg",
                CreatedBy = "ElGonzalin",
                CreatedDate = DateTime.Now,
                ModifiedBy = null,
                ModifiedDate = null
            };

            Entity.Imagen imagenResult;

            using (var context = new GalleryProjectDBContext())
            {
                var albumes = context.Albumes.ToList();
                if (!albumes.Any())
                {
                    //El id del album se genera automaticamente por el Identity, pero lo obtendrás cuando hagas el SaveChanges()
                    var album = new Entity.Album() { Nombre = "Album de Prueba", Seccion = Secciones.Peru, CreatedBy = "LaJennycita", CreatedDate = DateTime.Now, ModifiedBy = null, ModifiedDate = null };
                    context.Albumes.Add(album);
                    context.SaveChanges();
                    imagen.AlbumId = album.Id;
                    imagen.PortadaId = album.Id;

                    //Otra forma de hacer lo mismo que arriba, al añadir la imagen, la base nos devuelve la copia del objeto insertado
                    //Nuevamente el id aparecerá en ese objeto insertado despues de guardar los cambios.
                    var agregado = context.Imagenes.Add(imagen).Entity;
                    context.SaveChanges();
                    idImagen = agregado.Id;
                }
                else
                {
                    var agregado = context.Imagenes.Add(imagen).Entity;
                    context.SaveChanges();
                    idImagen = agregado.Id;
                }
            }

            using (var context = new GalleryProjectDBContext())
            {
                imagenResult = context.Imagenes.Include(x => x.Album).Where(x => x.Id == idImagen).FirstOrDefault();
            }

            var domainImagen = mapper.Map<Domain.Imagen>(imagenResult);
            return domainImagen;
        }
    }
}

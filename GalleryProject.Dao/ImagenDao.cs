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

        public ImagenDao(IMapper mapper)
        {
            this.mapper = mapper;
        }

        public Imagen AgregarImagenDePrueba(Imagen imagen)
        {
            var imagenAgregar = mapper.Map<Entity.Imagen>(imagen);
            imagenAgregar.CreatedBy = "El Gonzalín";
            imagenAgregar.CreatedDate = DateTime.Now;
            Entity.Imagen agregado;
            try
            {
                using (var context = new GalleryProjectDBContext())
                {
                    //Al añadir la imagen, la base nos devuelve la copia del objeto insertado
                    //El id aparecerá en ese objeto insertado despues de guardar los cambios.
                    agregado = context.Imagenes.Add(imagenAgregar).Entity;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Ha ocurrido un error al intentar insertar la imagen de prueba", ex);
            }

            var domainImagen = mapper.Map<Domain.Imagen>(agregado);
            return domainImagen;
        }

        public Domain.Imagen ObtenerImagenPor(int idImagen)
        {
            Entity.Imagen imagenResult;
            try
            {
                using (var context = new GalleryProjectDBContext())
                {
                    imagenResult = context.Imagenes.Include(x => x.Album).Where(x => x.Id == idImagen).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Ha ocurrido un error al intentar traer la imagen de prueba con Id: " + idImagen, ex);
            }

            var domainImagen = mapper.Map<Domain.Imagen>(imagenResult);
            return domainImagen;
        }
    }
}

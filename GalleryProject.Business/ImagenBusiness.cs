using GalleryProject.Business.Contracts;
using GalleryProject.Dao.Contracts;
using GalleryProject.Domain;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Business
{
    public class ImagenBusiness : IImagenBusiness
    {
        private readonly IImagenDao imagenDao;
        public ImagenBusiness(IImagenDao imagenDao)
        {
            this.imagenDao = imagenDao;
        }

        public Imagen AgregarImagenDePrueba(Imagen imagen)
        {
            imagen.Nombre = "Prueba_" + imagen.Nombre;
            var result = imagenDao.AgregarImagenDePrueba(imagen);
            return result;
        }

        public Imagen ObtenerImagenPor(int idImagen)
        {
            return imagenDao.ObtenerImagenPor(idImagen);
        }
    }
}

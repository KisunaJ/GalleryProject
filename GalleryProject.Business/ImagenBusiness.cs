using GalleryProject.Business.Contracts;
using GalleryProject.Dao.Contracts;
using GalleryProject.Domain;
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

        public int ObtenerImagenRandom(int maxRange, int minRange)
        {
            return new Random().Next(maxRange, minRange);
        }

        public Imagen ObtenerImagenPor(int idImagen)
        {
            return imagenDao.ObtenerImagenPor(idImagen);
        }
    }
}

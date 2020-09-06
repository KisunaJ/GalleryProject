using GalleryProject.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Business.Contracts
{
    public interface IImagenBusiness
    {
        int ObtenerImagenRandom(int maxRange, int minRange);

        Imagen ObtenerImagenPor(int idImagen);
    }
}

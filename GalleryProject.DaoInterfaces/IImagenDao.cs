using GalleryProject.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Dao.Contracts
{
    public interface IImagenDao
    {
        Imagen ObtenerImagenPor(int idImagen);
    }
}

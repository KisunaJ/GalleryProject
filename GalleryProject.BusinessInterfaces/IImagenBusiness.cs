using GalleryProject.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Business.Contracts
{
    public interface IImagenBusiness
    {
        Imagen AgregarImagenDePrueba(Imagen imagen);

        Imagen ObtenerImagenPor(int idImagen);
    }
}

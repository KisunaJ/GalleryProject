using GalleryProject.DaoInterfaces;
using GalleryProject.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Dao
{
    public class ImagenDao : IImagenDao
    {
        public Imagen ObtenerImagenPor(int idImagen)
        {
            var imagen = new Imagen() { 
                Id = idImagen,
                Nombre = "Imagen de Prueba",
                Descripcion = "La mejor imagen de prueba",
                Trabajo = "Trabajo",
                Ruta = "C:/rutaImportante/Imagen de Prueba.jpg" };
            return imagen;
        }
    }
}

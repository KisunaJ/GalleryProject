using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Domain
{
    public class Imagen
    {
        public int Id { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public Album Album { get; set; }
        
        public Album Portada { get; set; }

        public string Ruta { get; set; }
    }
}

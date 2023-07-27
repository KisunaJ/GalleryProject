using GalleryProject.Common.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Domain
{
    public class Album
    {
        public int Id { get; set; }

        public string Nombre { get; set; }

        public Secciones Seccion { get; set; }

        public string Url { get; set;  }
    }
}

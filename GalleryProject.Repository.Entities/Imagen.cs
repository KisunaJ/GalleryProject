using GalleryProject.Repository.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GalleryProject.Repository.Entities
{
    public class Imagen : BaseEntity
    {
        [MaxLength(200)]
        public string Nombre { get; set; }

        [MaxLength(500)]
        public string Descripcion { get; set; }

        [Required]
        public int AlbumId { get; set; }

        public virtual Album Album { get; set; }

        [ForeignKey("Portada")]
        public int? PortadaId { get; set; }

        public virtual Album Portada { get; set; }

        [Required]
        public string Ruta { get; set; }
    }
}

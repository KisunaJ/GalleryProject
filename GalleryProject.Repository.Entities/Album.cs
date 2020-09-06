using GalleryProject.Common.Enums;
using GalleryProject.Repository.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GalleryProject.Repository.Entities
{
    public class Album : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Nombre { get; set; }

        [Required]
        public Secciones Seccion { get; set; }
    }
}

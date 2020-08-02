using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GalleryProject.BusinessInterfaces;
using GalleryProject.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GalleryProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImagenController : ControllerBase
    {
        private readonly IImagenBusiness imagenBusiness;
        public ImagenController(IImagenBusiness imagenBusiness)
        {
            this.imagenBusiness = imagenBusiness;
        }

        [HttpGet("[action]")]
        public int GetRandomImagen()
        {
            return imagenBusiness.ObtenerImagenRandom(0, 5);
        }

        [HttpGet("[action]")]
        public Imagen GetImagenBy(int idImagen)
        {
            return imagenBusiness.ObtenerImagenPor(idImagen);
        }
    }
}

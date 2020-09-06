using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GalleryProject.Business.Contracts;
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

        [HttpPost("[action]")]
        public Imagen AddImagenDePrueba(string nombre, string descripcion, int idAlbum, string ruta, bool EsPortada)
        {
            var imagen = new Imagen { Nombre = nombre, Descripcion = descripcion, AlbumId = idAlbum, Ruta = ruta };
            //portadaid si es true serra igual a el valor de idAlbum, en caso de ser false sera la opcion despues de los dos puntos (:)
            imagen.PortadaId = EsPortada == true ? (int?)idAlbum : null; //el ? es el if y los : es el else.
            return imagenBusiness.AgregarImagenDePrueba(imagen);
        }

        [HttpGet("{id}")]
        public ActionResult<Imagen> GetImagenBy(int id)
        {
            var result = imagenBusiness.ObtenerImagenPor(id);
            return Ok(result);
        }
    }
}

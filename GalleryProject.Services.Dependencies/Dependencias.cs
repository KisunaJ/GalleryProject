using GalleryProject.Business;
using GalleryProject.Business.Contracts;
using GalleryProject.Dao;
using GalleryProject.Dao.Contracts;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace GalleryProject.Services.Dependencies
{
    public class Dependencias
    {
        public static void ConfigurarDependencias(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IImagenBusiness, ImagenBusiness>();
            services.AddScoped<IImagenDao, ImagenDao>();
        }
    }
}

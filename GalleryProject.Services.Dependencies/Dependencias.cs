using GalleryProject.Business;
using GalleryProject.BusinessInterfaces;
using GalleryProject.Dao;
using GalleryProject.DaoInterfaces;
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

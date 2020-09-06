using AutoMapper;
using GalleryProject.Domain;
using GalleryProject.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace GalleryProject.Dao.AutoMapperProfiles
{
    public class ImagenProfile : Profile
    {
        public ImagenProfile()
        {
            CreateMap<Domain.Imagen, Repository.Entities.Imagen>()
                .ReverseMap();
        }
    }
}

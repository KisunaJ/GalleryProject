using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Dao.AutoMapperProfiles
{
    public class AlbumProfile : Profile
    {
        public AlbumProfile()
        {
            CreateMap<Repository.Entities.Album, Domain.Album>()
                .ForMember(x => x.Url, y => y.MapFrom(x => "/trabajos/" + x.Nombre.Trim().Replace(" ", "") .ToLower()))
                .ReverseMap();
        }
    }
}

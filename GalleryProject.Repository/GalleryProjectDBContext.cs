using GalleryProject.Repository.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace GalleryProject.Repository
{
    public class GalleryProjectDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=.\SQLEXPRESS;Initial Catalog=GalleryProjectDB;Integrated Security=True")
                .EnableSensitiveDataLogging(true);
        }

        public DbSet<Album> Albumes { get; set; }
        public DbSet<Imagen> Imagenes { get; set; }
    }
}

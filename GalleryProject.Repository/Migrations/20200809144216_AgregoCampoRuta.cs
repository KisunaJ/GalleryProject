using Microsoft.EntityFrameworkCore.Migrations;

namespace GalleryProject.Repository.Migrations
{
    public partial class AgregoCampoRuta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ruta",
                table: "Imagenes",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ruta",
                table: "Imagenes");
        }
    }
}

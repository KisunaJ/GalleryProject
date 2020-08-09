using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GalleryProject.Repository.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Imagenes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(maxLength: 200, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<string>(maxLength: 200, nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    Nombre = table.Column<string>(maxLength: 200, nullable: true),
                    Descripcion = table.Column<string>(maxLength: 500, nullable: true),
                    AlbumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagenes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Albumes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(maxLength: 200, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<string>(maxLength: 200, nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    Nombre = table.Column<string>(maxLength: 200, nullable: false),
                    ImagenId = table.Column<int>(nullable: true),
                    Seccion = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Albumes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Albumes_Imagenes_ImagenId",
                        column: x => x.ImagenId,
                        principalTable: "Imagenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Albumes_ImagenId",
                table: "Albumes",
                column: "ImagenId");

            migrationBuilder.CreateIndex(
                name: "IX_Imagenes_AlbumId",
                table: "Imagenes",
                column: "AlbumId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Imagenes_Albumes_AlbumId",
                table: "Imagenes",
                column: "AlbumId",
                principalTable: "Albumes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albumes_Imagenes_ImagenId",
                table: "Albumes");

            migrationBuilder.DropTable(
                name: "Imagenes");

            migrationBuilder.DropTable(
                name: "Albumes");
        }
    }
}

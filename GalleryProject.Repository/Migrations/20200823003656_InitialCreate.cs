using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GalleryProject.Repository.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Nombre = table.Column<string>(maxLength: 100, nullable: false),
                    Seccion = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Albumes", x => x.Id);
                });

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
                    AlbumId = table.Column<int>(nullable: false),
                    PortadaId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Imagenes_Albumes_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Albumes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Imagenes_Albumes_PortadaId",
                        column: x => x.PortadaId,
                        principalTable: "Albumes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Imagenes_AlbumId",
                table: "Imagenes",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_Imagenes_PortadaId",
                table: "Imagenes",
                column: "PortadaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imagenes");

            migrationBuilder.DropTable(
                name: "Albumes");
        }
    }
}

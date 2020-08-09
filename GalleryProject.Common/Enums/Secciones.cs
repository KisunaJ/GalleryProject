using System.ComponentModel;

namespace GalleryProject.Common.Enums
{
    public enum Secciones : byte
    {
        [Description("Peru")]
        Peru = 1,
        [Description("Guatemala")]
        Guatemala = 2,
        [Description("Other Stories")]
        Otherstories = 3,
        [Description("Portraits")]
        Portraits = 4,
        [Description("Palimpsestos")]
        Palimpsestos = 5,
        [Description("Videos")]
        Videos = 6,
    }
}

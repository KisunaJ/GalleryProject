export enum Secciones {
    colombia     = 1,
    argentina    = 2,
    patrimonios = 3,
    noticias    = 4,
    palimpsestos = 5,
    videos       = 6,
}

export const SeccionesLabel = new Map<number, string>([
    [Secciones.colombia, 'Colombia'],
    [Secciones.argentina, 'Argentina'],
    [Secciones.patrimonios, 'Patrimonios de la Humanidad'],
    [Secciones.noticias,      'Noticias'],
    [Secciones.palimpsestos, 'Palimpsestos'],
    [Secciones.videos, 'Videos'],
]);
export enum Secciones {
    peru         = 1,
    guatemala    = 2,
    otherstories = 3,
    portraits    = 4,
    palimpsestos = 5,
    videos       = 6,
}

export const SeccionesLabel = new Map<number, string>([
    [Secciones.peru, 'Peru'],
    [Secciones.guatemala, 'Guatemala'],
    [Secciones.otherstories, 'Other Stories'],
    [Secciones.portraits, 'Portraits'],
    [Secciones.palimpsestos, 'Palimpsestos'],
    [Secciones.videos, 'Videos'],
]);
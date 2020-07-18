import { Routes } from '@angular/router';

import {HomeComponent} from  './home/home.component';
import {GalleryComponent} from  './gallery/gallery.component';
import {TrabajosComponent} from './trabajos/trabajos.component';
import {BioComponent} from './bio/bio.component';
import{ContactComponent} from './contact/contact.component';

export const routes: Routes=[

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'gallery/:albumes', component: GalleryComponent },
    {path: 'trabajos/:trabajos', component: TrabajosComponent },
    {path: 'bio', component: BioComponent},
    {path: 'contact', component: ContactComponent},

]; 
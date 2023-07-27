import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule} from 'primeng/button';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { GalleriaModule} from 'primeng/galleria';
import { CardModule} from 'primeng/card';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { AlbumesService} from './services/albumes.service';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    HomeComponent,
    TrabajosComponent,
    BioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    BrowserAnimationsModule,
    ButtonModule,
    GalleriaModule,
    CardModule,
    HttpClientModule
  ],
  providers: [

    AlbumesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

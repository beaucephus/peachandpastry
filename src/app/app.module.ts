import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreationsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    SlideshowModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormationComponent,
    ProjetsComponent,
    ContactComponent,
    CvComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulairesComponent } from './theorie/formulaires/formulaires.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { HomeComponent } from './application/home/home.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    NavbarComponent,
    FooterComponent,
    FormulaireComponent,
    ReadComponent,
    UpdateComponent,
    FunComponent,
    ContactComponent,
    HomeComponent,
    ErreurComponent,
    TutorielsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { MainComponent } from './pages/home/main/main.component';
import { ListaPetsAdocaoComponent } from './pages/home/main/lista-pets-adocao/lista-pets-adocao.component';
import { BuscaPetsComponent } from './pages/home/main/busca-pets/busca-pets.component';
import { CardPetComponent } from './pages/home/main/lista-pets-adocao/card-pet/card-pet.component';
import { SearchComponent } from './pages/home/header/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    ListaPetsAdocaoComponent,
    BuscaPetsComponent,
    CardPetComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule, //https://sherweb.github.io/ngx-materialize
    MzInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

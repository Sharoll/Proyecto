import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './segundaentrega/restaurantes/restaurantes.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ActitudesComponent } from './segundaentrega/actitudes/actitudes.component';
import { ConocimientosComponent } from './segundaentrega/conocimientos/conocimientos.component';
import { ExamenesComponent } from './segundaentrega/examenes/examenes.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PracticasComponent } from './segundaentrega/practicas/practicas.component';
import { PersonalComponent } from './segundaentrega/personal/personal.component';
import { PersonaService } from './services/persona.service';
import { RestaurantesService } from './services/restaurantes.service';
import { PersonaConsultaComponent } from './segundaentrega/persona-consulta/persona-consulta.component';
import { FiltroPersonaPipe } from './pipe/filtro-persona.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RestaurantesComponent,
    FooterComponent,
    HeaderComponent,
    ActitudesComponent,
    ConocimientosComponent,
    ExamenesComponent,
    InicioSesionComponent,
    PracticasComponent,
    PersonalComponent,
    PersonaConsultaComponent,
    FiltroPersonaPipe,
    AlertModalComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [PersonaService, RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//Ressource supplementaire
import { Ng2PaginationModule} from 'ng2-pagination';

//App Principal
import { AppComponent } from './app.component';

//On Importe les services
import {GetDataService } from "./get-data.service";
import {FavorisService } from "./favoris.service";

//On importe tous les autres composants
import { JeuComponent } from './jeu/jeu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES),
    Ng2PaginationModule,
  ],
  providers: [GetDataService,FavorisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

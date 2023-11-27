import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListPimentComponent } from './component/list-piment/list-piment.component';
import { PanierComponent } from './component/panier/panier.component';
import { FormsModule } from '@angular/forms';
import { AjoutPimentComponent } from './component/ajout-piment/ajout-piment.component';
import { DescriptionComponent } from './component/description/description.component';
import { RecettesComponent } from './component/recettes/recettes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavbarComponent,
    ListPimentComponent,
    PanierComponent,
    AjoutPimentComponent,
    DescriptionComponent,
    RecettesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

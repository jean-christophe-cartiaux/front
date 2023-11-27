import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ListPimentComponent } from './component/list-piment/list-piment.component';
import { PanierComponent } from './component/panier/panier.component';
import { AjoutPimentComponent } from './component/ajout-piment/ajout-piment.component';
import { DescriptionComponent } from './component/description/description.component';
import { RecettesComponent } from './component/recettes/recettes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'piment', component: ListPimentComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'ajout-piment', component: AjoutPimentComponent },
  { path: 'description/:id', component: DescriptionComponent },
  { path: 'recette', component: RecettesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

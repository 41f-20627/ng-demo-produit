import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  //{path:"liste", component:ProduitComponent},
  {path:"produit", component:ProduitComponent},
  {path:"produit/:id", component:DetailsProduitComponent},
  {path:"liste", redirectTo : "/produit", pathMatch:"full"},
  {path:"**", redirectTo : "/", pathMatch:"full"},
  //{path: "**", component:NonTrouveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

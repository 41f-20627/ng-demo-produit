import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits:any[];

  nom:String = "Toto le magicien";
  note:Number;

  constructor() { 
    //this.produits = [];
    this.note = 34;
    
  }

  ngOnInit(): void {
    this.chargerProduit(); 
    this.produits[2].description = "Lorem ipsum"; 
  }

  chargerProduit(){
    //this.produits = [...Array(10)].map((element, index) => {return {"id" : index , "nom" : ("test "+ index)}});
    this.produits = [...Array(10)].map(function(element, index) {
                                        return {"id" : index , "nom" : ("test "+ index)}
                                      });
    console.log(this.produits);
    
  }

}

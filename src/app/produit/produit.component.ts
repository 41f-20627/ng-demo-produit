import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits:any[];

  nom:string = "Toto le magicien";
  note:number;
  prixSeuil:number = 10;
  prixMin:number = 0;
  prixMax:number;

  estGlobalEditable:boolean = false;
  
  constructor() { 
    //this.produits = [];
    this.note = 34;
    
  }

  ngOnInit(): void {
    this.chargerProduit(); 
    this.produits[2].description = "Lorem ipsum"; 
  }
  
  valideAubaine(unProduit:any):boolean{
    let res = false;
    //return (unProduit.prix < this.prixSeuil ? true: false);
    //return (unProduit.prix < 10);
    if(unProduit.prix >= this.prixMin && unProduit.prix <= this.prixMax || unProduit.prix >= this.prixMin && this.prixMax == null){
      res = true;
    }
    return res;
  }

  fixerLePrix(min:number, max:any):void{
    this.prixMin = min;
    this.prixMax = max;
  }

  baisserPrixSeuil():void{
    this.prixSeuil--;
    console.log(this.prixSeuil);
  }
  hausserPrixSeuil():void{
    this.prixSeuil++;
    console.log(this.prixSeuil);
  }

  chargerProduit(){
    //this.produits = [...Array(10)].map((element, index) => {return {"id" : index , "nom" : ("test "+ index)}});
    this.produits = [...Array(10)].map(function(element, index) {
                                        return {"id" : index , "nom" : ("test "+ index), prix: index*2}
                                      });
    console.log(this.produits);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { IListeProduit } from '../iliste-produit';
import { IProduit } from '../iproduit';
import { ProduitServService } from '../produit-serv.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits:IProduit[];
  //listeProduit:IListeProduit;

  nom:string = "Toto le magicien";
  note:number;
  prixSeuil:number = 10;
  prixMin:number = 0;
  prixMax:number;

  estGlobalEditable:boolean = false;
  
  constructor(private servProduit:ProduitServService) { 
    //this.produits = [];
    this.note = 34;
    
  }

  ngOnInit(): void {
    this.chargerProduit(); 
    this.produits[2].description = "Lorem ipsum"; 
    this.servProduit.getListeProduit().subscribe(bieres => this.produits = bieres.data);
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
                                        return {"id_biere" : index , 
                                                "nom" : ("test "+ index), 
                                                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu nisl cursus, luctus nulla eu, cursus augue. Curabitur in nulla id nulla porttitor ullamcorper at posuere urna. Donec ut malesuada velit, a vulputate risus. Morbi in magna accumsan felis auctor pellentesque. Etiam malesuada justo magna, a pretium libero semper vel. Duis scelerisque lectus ut faucibus consectetur. Quisque eget imperdiet felis. Vivamus nulla tellus, auctor eget lobortis vel, scelerisque sit amet lectus.",
                                                "brasserie" : "brasserie " + index}
                                      });
    console.log(this.produits);
    
  }

}

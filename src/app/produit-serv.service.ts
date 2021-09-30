import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IListeProduit } from './iliste-produit';
import { Observable } from 'rxjs';
import { IProduit } from './iproduit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServService {
  private url:string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http:HttpClient) {}
  
  getListeProduit():Observable<IListeProduit>{
    console.log("super fetch!!!!!!");
    return this.http.get<IListeProduit>(this.url);
    
  }
  
  getProduit(id_biere:number):Observable<IProduit>{
    return this.http.get<IProduit>(this.url + id_biere);
  }

  deleteProduit(id_biere:number){
    const httpOption = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic '+btoa('biero:biero')
      })
    };
  }

  ajouterProduit(data:any){

  }
  modifierProduit(id_biere:number, data:any){
    //delete data["date_modif"];
  }
}

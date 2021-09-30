import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  estConnecte:boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }
 
  changement():void{
    /*if(this.estConnecte){
      this.authService.login();
    }
    else{
      this.authService.logout();
    }*/
    this.authService.log = this.estConnecte;  // Setter
      
    console.log("Statut de connexion :" + this.estConnecte);
  }
}

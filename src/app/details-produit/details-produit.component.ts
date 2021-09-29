import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.scss']
})
export class DetailsProduitComponent implements OnInit {
  @Input() produit:any;

  @Input() estEditable:boolean = true;

  constructor() { }
  

  ngOnInit(): void {
  }
  changeEditable():void{
    this.estEditable = !this.estEditable;
  }
}

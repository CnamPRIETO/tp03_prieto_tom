import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
  produits : Observable<Produit[]>;

  constructor(private apiService: ApiService) { 
    this.produits = new Observable<Produit[]>();
  }

  ngOnInit() {
      this.produits = this.apiService.getProduits();
  }


}

import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../domain/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sale`).pipe(
      catchError(this.handleError)
    );
  }

  getMinMaxTotal(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sale/getArray/montant`).pipe(
      catchError(this.handleError)
    );
  }

  addSale(sale:Product): Observable<any> {
	  console.log('I am in root')
	  console.log(sale)
	return this.http.post(`${this.baseUrl}/sale`, sale)
  }


  // Exemple : récupérer un utilisateur par ID
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(product : Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/sale/${product.numProduit}`, product).pipe(
      catchError(this.handleError)
    );
  }

  // Exemple : suppression d’un utilisateur
  deleteSale(numProduit: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sale/${numProduit}`).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Une erreur est survenue lors de l’appel API.'));
  }
}

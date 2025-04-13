import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://192.168.43.77:3000';

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

  // Exemple : ajouter un utilisateur
  addUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Exemple : récupérer un utilisateur par ID
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Exemple : mise à jour d’un utilisateur
  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, data).pipe(
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

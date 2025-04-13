// src/app/service/appconfigservice.ts

import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // à moins que tu l'injectes ailleurs en standalone
})
export class AppConfigService {
  // Signal pour transition terminée
  private transitionCompleted = signal(true); // tu peux mettre false au début si nécessaire

  constructor() {}

  transitionComplete() {
    return this.transitionCompleted();
  }

  // Si tu veux pouvoir modifier la valeur :
  completeTransition() {
    this.transitionCompleted.set(true);
  }

  resetTransition() {
    this.transitionCompleted.set(false);
  }
}

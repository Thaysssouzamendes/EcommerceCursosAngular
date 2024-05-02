import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ICurso } from '../../interface/cursos.interface';

@Component({
  selector: 'app-cursos-cards',
  standalone: true,
  imports: [ NgIf,MatCardModule ],
  templateUrl: './cursos-cards.component.html',
  styleUrl: './cursos-cards.component.css'
})
export class CursosCardsComponent implements OnInit {
  @Input() curso?: ICurso;
  @Input() teste?: string;
  @Output() addCursoToCart: EventEmitter<void> = new EventEmitter();

  addedCursosList: ICurso[] = [];

  ngOnInit() {
    this.addedCursosList = JSON.parse(localStorage.getItem("addedCursosList") || "[]");
  }
  
  findOrAddCurso(curso?: ICurso) {
    
    for (let i=0; i<this.addedCursosList.length; i++) {
      const currCurso = this.addedCursosList[i];
      if (curso?.id === currCurso.id) {
        currCurso.totalAddedToCart = (curso.totalAddedToCart < curso.totalInStock)? currCurso.totalAddedToCart + 1 : currCurso.totalAddedToCart;
        return;
      }
    }

if (curso){
 
  curso.totalAddedToCart = 1;
  this.addedCursosList.push(curso);
} 
  }

addToShoppingCart() {
  this.addCursoToCart.emit();
 
 this.findOrAddCurso(this.curso);
 localStorage.setItem("addedCursosList", JSON.stringify(this.addedCursosList));
 
}
}


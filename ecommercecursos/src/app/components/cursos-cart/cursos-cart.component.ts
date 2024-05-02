import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list' ;
import { MatButtonModule } from '@angular/material/button';
import { ICurso } from '../../interface/cursos.interface';

@Component({
  selector: 'app-cursos-cart',
  standalone: true,
  imports: [  MatListModule, MatDividerModule, MatButtonModule ],
  templateUrl: './cursos-cart.component.html',
  styleUrl: './cursos-cart.component.css'
})
export class CursosCartComponent implements OnInit, OnChanges{
  @Input("cursosList") addedCursosList: ICurso[] = [];

  ngOnInit() {
   
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    localStorage.setItem("addedCursosList", JSON.stringify(this.addedCursosList));
  }

  removeCursoFromCart(curso: ICurso) {
    const cursoIndex = this.addedCursosList.findIndex((currCurso) => {
     return currCurso.id === curso.id;
    })
    this.addedCursosList.splice(cursoIndex, 1);
  }

  incrementTotalCursoCopies(curso: ICurso) {
    curso.totalAddedToCart++;
    if (curso.totalAddedToCart > curso.totalInStock) {
      curso.totalAddedToCart = curso.totalInStock;
  }
  localStorage.setItem("addedCursosList", JSON.stringify(this.addedCursosList));
 }

  decrementTotalCursoCopies(curso: ICurso) {
    curso.totalAddedToCart--;

    if(curso.totalAddedToCart <= 0) {
      this.removeCursoFromCart(curso);
   }
   localStorage.setItem("addedCursosList", JSON.stringify(this.addedCursosList));
 }

}



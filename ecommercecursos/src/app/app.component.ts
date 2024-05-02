import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { CursosCatalogComponent } from './pages/cursos-catalog/cursos-catalog.component';
import { CursosCartComponent } from './components/cursos-cart/cursos-cart.component';
import { ICurso } from './interface/cursos.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
        MatSidenavModule,
        MatIconModule,
        HeaderComponent,
        CursosCatalogComponent,
        CursosCartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title: string = "it's me you're looking for...";
  addedCursosList: ICurso[] = [];

  ngOnInit() {
    this.addedCursosList = JSON.parse(localStorage.getItem("addedCursosList") || "[]");
  }

  findOrAddCurso(curso: ICurso) {
    
    for (let i=0; i<this.addedCursosList.length; i++) {
      const currCurso = this.addedCursosList[i];
      if (curso.id === currCurso.id) {
        currCurso.totalAddedToCart = (curso.totalAddedToCart < curso.totalInStock)? currCurso.totalAddedToCart + 1 : currCurso.totalAddedToCart;
        return;
      }
    }

    
    curso.totalAddedToCart = 1;
    this.addedCursosList.push(curso);
  }

  addCursoToCart(curso: ICurso) {
    

    this.findOrAddCurso(curso);
    this.addedCursosList = [...this.addedCursosList]; 
   
    
  }
}
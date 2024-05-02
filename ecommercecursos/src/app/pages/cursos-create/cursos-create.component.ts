import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ICurso } from '../../interface/cursos.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-create',
  standalone: true,
  providers: [ provideNativeDateAdapter() ],
  imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule ],
  templateUrl: './cursos-create.component.html',
  styleUrl: './cursos-create.component.css'
})
export class CursosCreateComponent implements OnInit{
  cursosList: ICurso[] = [];
  cursoForm: FormGroup;
 
  constructor() {
    this.cursoForm = new FormGroup({
      title: new FormControl("Titulo"),
      author: new FormControl(),
      description: new FormControl(),
      published_date: new FormControl(),
      price: new FormControl(),
      totalInStock: new FormControl(),
    });
  }
 
   ngOnInit() {
     this.cursosList =JSON.parse(localStorage.getItem("cursosList") || "[]");
   }
  
 
 submitForm() {
   const newCurso: ICurso = this.cursoForm.value;
    this.cursosList.push(newCurso);
    localStorage.setItem("cursosList", JSON.stringify(this.cursosList));
 }
 }
 

import { Routes } from '@angular/router';
import { CursosCatalogComponent } from './pages/cursos-catalog/cursos-catalog.component';
import { CursosCreateComponent } from './pages/cursos-create/cursos-create.component';


export const routes: Routes = [
{ path:'', component: CursosCatalogComponent },
{ path:'cursos/create', component: CursosCreateComponent },

];

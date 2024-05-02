import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCatalogComponent } from './cursos-catalog.component';

describe('CursosCatalogComponent', () => {
  let component: CursosCatalogComponent;
  let fixture: ComponentFixture<CursosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

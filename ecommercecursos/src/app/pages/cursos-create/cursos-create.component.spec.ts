import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCreateComponent } from './cursos-create.component';

describe('CursosCreateComponent', () => {
  let component: CursosCreateComponent;
  let fixture: ComponentFixture<CursosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCartComponent } from './cursos-cart.component';

describe('CursosCartComponent', () => {
  let component: CursosCartComponent;
  let fixture: ComponentFixture<CursosCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

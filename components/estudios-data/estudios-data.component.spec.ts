import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosDataComponent } from './estudios-data.component';

describe('EstudiosDataComponent', () => {
  let component: EstudiosDataComponent;
  let fixture: ComponentFixture<EstudiosDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

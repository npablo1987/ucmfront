import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAppComponent } from './registro-app.component';

describe('RegistroAppComponent', () => {
  let component: RegistroAppComponent;
  let fixture: ComponentFixture<RegistroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

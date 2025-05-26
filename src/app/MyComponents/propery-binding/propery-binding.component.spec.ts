import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyBindingComponent } from './propery-binding.component';

describe('ProperyBindingComponent', () => {
  let component: ProperyBindingComponent;
  let fixture: ComponentFixture<ProperyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProperyBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProperyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

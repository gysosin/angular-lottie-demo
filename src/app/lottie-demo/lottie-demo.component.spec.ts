import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieDemoComponent } from './lottie-demo.component';

describe('LottieDemoComponent', () => {
  let component: LottieDemoComponent;
  let fixture: ComponentFixture<LottieDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LottieDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LottieDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

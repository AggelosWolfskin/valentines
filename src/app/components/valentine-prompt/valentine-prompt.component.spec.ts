import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinePromptComponent } from './valentine-prompt.component';

describe('ValentinePromptComponent', () => {
  let component: ValentinePromptComponent;
  let fixture: ComponentFixture<ValentinePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentinePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValentinePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

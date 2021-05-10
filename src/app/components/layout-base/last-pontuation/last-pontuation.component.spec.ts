import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPontuationComponent } from './last-pontuation.component';

describe('LastPontuationComponent', () => {
  let component: LastPontuationComponent;
  let fixture: ComponentFixture<LastPontuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPontuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPontuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

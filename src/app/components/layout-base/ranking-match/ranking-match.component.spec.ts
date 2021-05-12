import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMatchComponent } from './ranking-match.component';

describe('RankingMatchComponent', () => {
  let component: RankingMatchComponent;
  let fixture: ComponentFixture<RankingMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

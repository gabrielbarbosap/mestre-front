import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountTeamComponent } from './mount-team.component';

describe('MountTeamComponent', () => {
  let component: MountTeamComponent;
  let fixture: ComponentFixture<MountTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

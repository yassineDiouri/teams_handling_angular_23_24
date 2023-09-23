import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsButtonsComponent } from './teams-buttons.component';

describe('TeamsButtonsComponent', () => {
  let component: TeamsButtonsComponent;
  let fixture: ComponentFixture<TeamsButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsButtonsComponent]
    });
    fixture = TestBed.createComponent(TeamsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

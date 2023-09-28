import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsEditionModalComponent } from './teams-edition-modal.component';

describe('TeamsEditionModalComponent', () => {
  let component: TeamsEditionModalComponent;
  let fixture: ComponentFixture<TeamsEditionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsEditionModalComponent]
    });
    fixture = TestBed.createComponent(TeamsEditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

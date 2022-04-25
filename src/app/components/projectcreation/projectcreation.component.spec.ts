import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreationComponent } from './projectcreation.component';

describe('ProjectcreationComponent', () => {
  let component: ProjectcreationComponent;
  let fixture: ComponentFixture<ProjectcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

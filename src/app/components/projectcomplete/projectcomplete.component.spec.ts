import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcompleteComponent } from './projectcomplete.component';

describe('ProjectcompleteComponent', () => {
  let component: ProjectcompleteComponent;
  let fixture: ComponentFixture<ProjectcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

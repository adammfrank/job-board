import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobComponent } from './create-job.component';

describe('CreateJobComponent', () => {
  let component: CreateJobComponent;
  let fixture: ComponentFixture<CreateJobComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

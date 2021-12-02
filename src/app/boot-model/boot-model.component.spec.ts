import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootModelComponent } from './boot-model.component';

describe('BootModelComponent', () => {
  let component: BootModelComponent;
  let fixture: ComponentFixture<BootModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

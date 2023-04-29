import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcasComponent } from './rcas.component';

describe('RcasComponent', () => {
  let component: RcasComponent;
  let fixture: ComponentFixture<RcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

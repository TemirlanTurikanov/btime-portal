import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmProcessComponent } from './bpm-process.component';

describe('BpmProcessComponent', () => {
  let component: BpmProcessComponent;
  let fixture: ComponentFixture<BpmProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

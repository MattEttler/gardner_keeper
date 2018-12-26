import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapPepComponent } from './tap-pep.component';

describe('TapPepComponent', () => {
  let component: TapPepComponent;
  let fixture: ComponentFixture<TapPepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapPepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapPepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

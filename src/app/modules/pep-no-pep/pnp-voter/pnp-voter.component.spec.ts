import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnpVoterComponent } from './pnp-voter.component';

describe('PnpVoterComponent', () => {
  let component: PnpVoterComponent;
  let fixture: ComponentFixture<PnpVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnpVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnpVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

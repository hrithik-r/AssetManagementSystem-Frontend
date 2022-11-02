import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaselistingComponent } from './purchaselisting.component';

describe('PurchaselistingComponent', () => {
  let component: PurchaselistingComponent;
  let fixture: ComponentFixture<PurchaselistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaselistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaselistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

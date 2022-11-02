import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCreationComponent } from './asset-creation.component';

describe('AssetCreationComponent', () => {
  let component: AssetCreationComponent;
  let fixture: ComponentFixture<AssetCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

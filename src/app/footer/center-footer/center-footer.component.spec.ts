import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFooterComponent } from './center-footer.component';

describe('CenterFooterComponent', () => {
  let component: CenterFooterComponent;
  let fixture: ComponentFixture<CenterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

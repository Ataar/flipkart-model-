import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashbordComponent } from './mobile-dashbord.component';

describe('MobileDashbordComponent', () => {
  let component: MobileDashbordComponent;
  let fixture: ComponentFixture<MobileDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

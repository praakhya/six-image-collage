import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizImageCollageComponent } from './siz-image-collage.component';

describe('SizImageCollageComponent', () => {
  let component: SizImageCollageComponent;
  let fixture: ComponentFixture<SizImageCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizImageCollageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizImageCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

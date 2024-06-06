import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderScreenComponent } from './uploader-screen.component';

describe('UploaderScreenComponent', () => {
  let component: UploaderScreenComponent;
  let fixture: ComponentFixture<UploaderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploaderScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploaderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

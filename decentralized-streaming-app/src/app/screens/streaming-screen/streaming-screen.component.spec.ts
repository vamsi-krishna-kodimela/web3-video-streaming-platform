import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingScreenComponent } from './streaming-screen.component';

describe('StreamingScreenComponent', () => {
  let component: StreamingScreenComponent;
  let fixture: ComponentFixture<StreamingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

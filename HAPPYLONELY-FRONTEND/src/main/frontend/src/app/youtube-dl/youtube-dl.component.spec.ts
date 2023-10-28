import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDLComponent } from './youtube-dl.component';

describe('YoutubeDLComponent', () => {
  let component: YoutubeDLComponent;
  let fixture: ComponentFixture<YoutubeDLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeDLComponent]
    });
    fixture = TestBed.createComponent(YoutubeDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

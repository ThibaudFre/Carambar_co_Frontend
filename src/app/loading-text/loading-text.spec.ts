import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingText } from './loading-text';

describe('LoadingText', () => {
  let component: LoadingText;
  let fixture: ComponentFixture<LoadingText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

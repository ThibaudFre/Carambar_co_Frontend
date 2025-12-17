import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alljokes } from './alljokes';

describe('Alljokes', () => {
  let component: Alljokes;
  let fixture: ComponentFixture<Alljokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alljokes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alljokes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

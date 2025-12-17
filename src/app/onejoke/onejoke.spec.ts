import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onejoke } from './onejoke';

describe('Onejoke', () => {
  let component: Onejoke;
  let fixture: ComponentFixture<Onejoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onejoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onejoke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

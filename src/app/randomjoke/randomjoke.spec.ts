import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Randomjoke } from './randomjoke';

describe('Randomjoke', () => {
  let component: Randomjoke;
  let fixture: ComponentFixture<Randomjoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Randomjoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Randomjoke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

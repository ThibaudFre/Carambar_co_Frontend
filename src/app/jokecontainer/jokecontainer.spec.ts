import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jokecontainer } from './jokecontainer';

describe('Jokecontainer', () => {
  let component: Jokecontainer;
  let fixture: ComponentFixture<Jokecontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jokecontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jokecontainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

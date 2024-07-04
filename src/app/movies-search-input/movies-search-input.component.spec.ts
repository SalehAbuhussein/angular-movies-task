import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchInputComponent } from './movies-search-input.component';

describe('MoviesSearchInputComponent', () => {
  let component: MoviesSearchInputComponent;
  let fixture: ComponentFixture<MoviesSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

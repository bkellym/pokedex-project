import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTagComponent } from './poke-tag.component';

describe('PokeTagComponent', () => {
  let component: PokeTagComponent;
  let fixture: ComponentFixture<PokeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

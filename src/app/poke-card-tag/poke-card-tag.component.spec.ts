import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardTagComponent } from './poke-card-tag.component';

describe('PokeCardTagComponent', () => {
  let component: PokeCardTagComponent;
  let fixture: ComponentFixture<PokeCardTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeCardTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardTitleComponent } from './poke-card-title.component';

describe('PokeCardTitleComponent', () => {
  let component: PokeCardTitleComponent;
  let fixture: ComponentFixture<PokeCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

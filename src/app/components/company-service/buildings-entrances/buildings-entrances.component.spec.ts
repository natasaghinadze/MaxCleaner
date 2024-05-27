import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsEntrancesComponent } from './buildings-entrances.component';

describe('BuildingsEntrancesComponent', () => {
  let component: BuildingsEntrancesComponent;
  let fixture: ComponentFixture<BuildingsEntrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsEntrancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

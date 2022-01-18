import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarySectionComponent } from './secundary-section.component';

describe('SecundarySectionComponent', () => {
  let component: SecundarySectionComponent;
  let fixture: ComponentFixture<SecundarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundarySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

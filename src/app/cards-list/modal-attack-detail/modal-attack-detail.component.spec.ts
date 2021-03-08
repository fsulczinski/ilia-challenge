import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAttackDetailComponent } from './modal-attack-detail.component';

describe('ModalAttackDetailComponent', () => {
  let component: ModalAttackDetailComponent;
  let fixture: ComponentFixture<ModalAttackDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAttackDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAttackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

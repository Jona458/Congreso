import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallediasPage } from './detalledias.page';

describe('DetallediasPage', () => {
  let component: DetallediasPage;
  let fixture: ComponentFixture<DetallediasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallediasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

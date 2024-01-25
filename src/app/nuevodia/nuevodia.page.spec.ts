import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevodiaPage } from './nuevodia.page';

describe('NuevodiaPage', () => {
  let component: NuevodiaPage;
  let fixture: ComponentFixture<NuevodiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevodiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

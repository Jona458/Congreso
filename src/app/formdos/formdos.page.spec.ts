import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormdosPage } from './formdos.page';

describe('FormdosPage', () => {
  let component: FormdosPage;
  let fixture: ComponentFixture<FormdosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

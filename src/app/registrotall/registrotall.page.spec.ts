import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrotallPage } from './registrotall.page';

describe('RegistrotallPage', () => {
  let component: RegistrotallPage;
  let fixture: ComponentFixture<RegistrotallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrotallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

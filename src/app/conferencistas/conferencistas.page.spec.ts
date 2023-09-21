import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConferencistasPage } from './conferencistas.page';

describe('ConferencistasPage', () => {
  let component: ConferencistasPage;
  let fixture: ComponentFixture<ConferencistasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConferencistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

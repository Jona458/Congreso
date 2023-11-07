import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntegrantesEquipoComponent } from './integrantes-equipo.component';

describe('IntegrantesEquipoComponent', () => {
  let component: IntegrantesEquipoComponent;
  let fixture: ComponentFixture<IntegrantesEquipoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesEquipoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrantesEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

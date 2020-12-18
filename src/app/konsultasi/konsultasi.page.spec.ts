import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KonsultasiPage } from './konsultasi.page';

describe('KonsultasiPage', () => {
  let component: KonsultasiPage;
  let fixture: ComponentFixture<KonsultasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsultasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KonsultasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

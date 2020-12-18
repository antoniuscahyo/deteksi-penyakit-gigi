import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PakarPage } from './pakar.page';

describe('PakarPage', () => {
  let component: PakarPage;
  let fixture: ComponentFixture<PakarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PakarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

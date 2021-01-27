import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePasienPage } from './home-pasien.page';

describe('HomePasienPage', () => {
  let component: HomePasienPage;
  let fixture: ComponentFixture<HomePasienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePasienPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePasienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

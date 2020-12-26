import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPenyakitPage } from './detail-penyakit.page';

describe('DetailPenyakitPage', () => {
  let component: DetailPenyakitPage;
  let fixture: ComponentFixture<DetailPenyakitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPenyakitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPenyakitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

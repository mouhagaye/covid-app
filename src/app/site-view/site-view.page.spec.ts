import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteViewPage } from './site-view.page';

describe('SiteViewPage', () => {
  let component: SiteViewPage;
  let fixture: ComponentFixture<SiteViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

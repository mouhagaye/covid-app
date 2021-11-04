import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SitesPrelevementsPage } from './sites-prelevements.page';

describe('SitesPrelevementsPage', () => {
  let component: SitesPrelevementsPage;
  let fixture: ComponentFixture<SitesPrelevementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesPrelevementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SitesPrelevementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

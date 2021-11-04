import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllSymptomsPage } from './all-symptoms.page';

describe('AllSymptomsPage', () => {
  let component: AllSymptomsPage;
  let fixture: ComponentFixture<AllSymptomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSymptomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllSymptomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCovidPage } from './test-covid.page';

describe('TestCovidPage', () => {
  let component: TestCovidPage;
  let fixture: ComponentFixture<TestCovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

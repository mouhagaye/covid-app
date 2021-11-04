import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapWorldPage } from './map-world.page';

describe('MapWorldPage', () => {
  let component: MapWorldPage;
  let fixture: ComponentFixture<MapWorldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWorldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapWorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddshipmentPage } from './addshipment.page';

describe('AddshipmentPage', () => {
  let component: AddshipmentPage;
  let fixture: ComponentFixture<AddshipmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshipmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddshipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

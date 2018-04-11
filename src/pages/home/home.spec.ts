import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './pages/home';

describe('HomePage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        StatusBar,
        SplashScreen
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });

  it ('should have two pages', () => {
    expect(component.items.length).toBe(3);
  });

});

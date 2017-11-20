import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {WorldGoalPage} from "../pages/world-goal/world-goal";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DirectionsPage} from "../pages/directions/directions";
import {IonicAudioModule} from 'ionic-audio';
import {GalleryPage} from "../pages/gallery/gallery";
import {ImageSliderPage} from "../pages/image-slider/image-slider";
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {ChildrensTextPage} from "../pages/childrens-text/childrens-text";
import {AudioPage} from "../pages/audio/audio";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ChildrensTextDetailPage} from "../pages/childrens-text-detail/childrens-text-detail";

export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WorldGoalPage,
    DirectionsPage,
    GalleryPage,
    ImageSliderPage,
    ChildrensTextPage,
    AudioPage,
    ChildrensTextDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WorldGoalPage,
    DirectionsPage,
    GalleryPage,
    ImageSliderPage,
    ChildrensTextPage,
    AudioPage,
    ChildrensTextDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
}

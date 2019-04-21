import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ActionSheet} from '@ionic-native/action-sheet';
import {ActionSheetController} from '@ionic/angular'
import {HttpClientModule} from '@angular/common/http';
// import {Tab1Page} from './tab1/tab1.page';
// import {ModalPage} from './modal/modal.page';
import {FormsModule} from '@angular/forms';
// import {Tab2Page} from './tab2/tab2.page';

// we need to import from ionic-native
// import {ActionSheet} from '@ionic-native/action-sheet';


@NgModule({
  declarations: [AppComponent
  // Tab1Page,
  // ModalPag
  //     Tab2Page
      ],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
      // VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      ActionSheetController,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

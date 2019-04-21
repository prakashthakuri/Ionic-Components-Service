import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {colors} from '@angular-devkit/core/src/terminal';
import bold = colors.bold;
import {NavController} from '@ionic/angular';
import {inspect} from 'util';
import {MyserviceService} from '../myservice.service';

// import { custom } from '../custom/custom.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {




theData;
theJoke;

  constructor( public http: HttpClient,
            public navCtrl: NavController,
            private myService: MyserviceService) {

            }






// openCustom() {
//
//   this.navCtrl.navigateRoot(custom);
// }

getData() {


  console.log('in getData() from Service with doTheHardStuff() ');
  this.myService.doTheHardStuff();

  // @ts-ignore
  this.myService.doTheHardStuff()._subscribe(result => {

    console.log(result);
    this.theData = result.value;
    this.theJoke = result.body.value;
  });
}

}







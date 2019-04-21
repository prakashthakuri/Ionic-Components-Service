import { Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit{

value =null;


  constructor(public modalController: ModalController,
              public  navParams: NavParams) { }

closeModal() {

    this.modalController.dismiss();

}

ngOnInit(){

      this.value = this.navParams.get('value');
}



}

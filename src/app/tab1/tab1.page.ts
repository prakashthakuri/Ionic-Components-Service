import { Component } from '@angular/core';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
// import {ModalPage} from '../modal/modal.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    name;

    constructor(public actionSheetController: ActionSheetController,
                public modalController: ModalController,
                // public nav: NavController
    ) {

    }
    async openActionSheet() {

        const actionSheet = await this.actionSheetController.create({
            header: 'Pokhara',
            buttons: [{
                text: 'Visit Pokhara',
                handler: () => {
                    console.log('You visited Pokhara');
                }
            }, {
                text: 'Share with Friends',
                handler: () => {
                    console.log('You Shared with your Friends');
                }
            },
                {
                    text: 'Favorite',
                    handler: () => {
                        console.log('Pokhara is your Favorite');
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        });
        await actionSheet.present();
    }


    async openModal() {
        const myModal = await this.modalController.create({
            component: ModalPage,
            componentProps: {value: this.name}
        });
        myModal.present();

    }
}



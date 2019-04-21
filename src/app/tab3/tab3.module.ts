import {AlertController, IonicModule, NavController} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import {HttpClientModule} from '@angular/common/http';
import {ComponentModule} from '../components/component.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
     ComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {
  // public todo = [];
  // public reorderIsEnabled = false;

  constructor(private Http: HttpClientModule
             // public navCtrl: NavController,
              // private alertController: AlertController
  ) {

    // this.todo = this.todoService.getTodos();

  }

  // toogleReorder() {
  //   this.reorderIsEnabled = !this.reorderIsEnabled;
  // }


  // openTodoAlert() {
  //
  //   const addtodoAlert = this.alertController.create({
  //
  //     title:  "Add a todo",
  //     message: "Enter your todo",
  //     inputs: [
  //       {
  //         type: "text",
  //         name: "addTodoInput"
  //       }
  //       ],
  //     buttons: [
  //       {
  //         text: "Cancel"
  //       },
  //       {
  //         text: "Add Todo",
  //         handler: (inputData) => {
  //           let todoText;
  //
  //           todoText = inputData.addTodoInput;
  //           this.todoService.addTodo(todoText);
  //         }
  //       }
  //     ]
  //   });
  //   addtodoAlert.present()
  // }
}

import {Component, ElementRef,  Renderer2, ViewChild} from '@angular/core';
import { Platform} from '@ionic/angular';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    @ViewChild('eventCanvas') canvas: any;


    canvasElement: any;


    constructor(public platform: Platform,
                public renderer: Renderer2
    ) {
        console.log('Hello CanvasDraw Component');

    }

    // handleMotion();

    ngOnInit() {
        // call function


        // }
        // ngAfterViewInit() {
        //     console.log(this.canvas);
        //     this.canvasElement = this.canvas.nativeElemet;
        //     console.log(this.platform.width());

        // this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.height() + '');
        // this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        // }

        // ionViewDidLoad(): void
        // {


        // const width = window.innerWidth / 2;
        // const height = window.innerHeight;
        //
        //
        // const c = document.getElementById("eventCanvas");
        // const ctx = c.getContext("2d");
        // // c.width = width;
        // c.height = height;


        // handleMotion()
        // {
        //
        //
        //     var x = event.accelerationIncludingGravity.x; //west to east
        //     //
        //     var y = event.accelerationIncludingGravity.y; //south to north
        //     //
        //     var z = event.accelerationIncludingGravity.z; // down to up
        //
        //     if (x * y * z > 0) {
        //
        //         ctx.save();
        //         ctx.translate(-(x + 2), -(y + 2));
        //         drawCircle(100, 150, 300, width, 200, "black", "white", true, x, y); //Math.pow(10,1000) infinity value not loading
        //     } else {
        //         ctx.restore();
        //         ctx.translate((x + 2), (y + 2));
        //         drawCircle(100, 150, 300, width, 200, "white", "black", true, x, y);
        //     }
        //     //
        //     //
        //     //     requestAnimationFrame(updateCanvas);
        //     //     // requestAnimationFrame(drawCanvas);
        //     //
        //     // }
        //     window.addEventListener("devicemotion", handleMotion, true);
        //
        //     function positiveAngle(i, j, k) {
        //         if (i % 2 == 0)
        //             return Math.PI / (k) * j;
        //         else
        //             return Math.PI / (k) * j * -1;
        //     }
        //
        //     function negativeAngle(i, j, k) {
        //
        //         if (i % 2 == 0)
        //             return 2 * Math.PI / (k) * i * -1;
        //         else
        //             return 2 * Math.PI / (k) * j; //angle
        //     }
        //
        //     function drawCircle(loop, k, cont, radius, radius2, colorBlack, colorWhite, checkAngle, x, y) {
        //
        //         for (var i = 0; i < loop; i++) {
        //
        //             var r = radius - i * k;
        //
        //             for (var j = 0; j < cont; j++) {
        //
        //                 //var angle;
        //                 if (checkAngle == true) //===
        //                     angle = positiveAngle(i, j, cont);
        //
        //                 else
        //                     angle = negativeAngle(i, j, cont);
        //
        //                 x = r * Math.sin(angle) - 200;
        //
        //                 y = r * Math.cos(angle) + height;
        //
        //                 ctx.beginPath();
        //
        //                 if (j % 2 == 0) {
        //
        //                     ctx.fillStyle = colorBlack;
        //
        //                 } else {
        //                     ctx.fillStyle = colorWhite;
        //                 }
        //                 ctx.arc(x, y, radius2, 0, 2 * Math.PI, false);
        //                 ctx.fill();
        //             }
        //             for (var j = 0; j < cont; j++) {
        //
        //                 var angle;
        //                 if (checkAngle == true)
        //
        //                 //  Comparison checkAngle==true may cause unexpected type coercion
        //
        //                     angle = positiveAngle(j, i, cont);
        //                 else
        //                     angle = negativeAngle(i, j, cont);
        //             }
        //         }
        //     }
        //
        //     function drawCanvas() {
        //         window.addEventListener("devicemotion", handleMotion, false);
        //         window.requestAnimationFrame(drawCanvas);
        //     }
        //
        //     window.addEventListener("load", drawCircle(100, 150, 300, width, 200, "black", "white", true, 0, 0), false);
        //     window.requestAnimationFrame(drawCanvas);
        //     window.requestAnimationFrame(drawCircle);
        //
        //
        //     function updateCanvas() {
        //         drawCanvas();
        //
        //         window.requestAnimationFrame(drawCanvas);
        //         window.addEventListener("load", drawCircle(100, 150, 300, width, 200, "blue", "red", true, 0, 0));
        //
        //
        //     }

    }
}

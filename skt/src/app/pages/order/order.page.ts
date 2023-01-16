import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from 'src/app/popup/order-menu/order-menu.page';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders = [{
    "date": "today , 12 Aug 2022",
    "order": [{
      "id": "01",
      "image": "skate.png",
      "title": "Powell Peralta",
      "price": "200.10",
      "transId": "5874223",
      "status": "CONFIRM"
    }
  ]
},    
    {
      "date": "30 , Aug 2021",
      "order": [{
        "id": "02",
        "image": "skate02.png",
        "title": "Powell Peralta",
        "price": "220.10",
        "transId": "5974478",
        "status": "CANCELED"
      }     
     ]
  }]
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderMenuPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });

    await popover.present();
  }

}

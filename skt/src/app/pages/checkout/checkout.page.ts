import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public products = [
    {image: "/assets/image/skate04.png", name: "Primor Skateboards", price: "120.40"},
    {image: "/assets/image/skate05.png", name: "Primor Skateboards", price: "110.97"},
    {image: "/assets/image/skate06.png", name: "Primor Skateboards", price: "159.80"},
    {image: "/assets/image/skate07.png", name: "Primor Skateboards", price: "126.40"},
    {image: "/assets/image/skate08.png", name: "Primor Skateboards", price: "132.47"},
    {image: "/assets/image/skate09.png", name: "Primor Skateboards", price: "124.60"},
  ]

  constructor() { }

  ngOnInit() {
  }

}

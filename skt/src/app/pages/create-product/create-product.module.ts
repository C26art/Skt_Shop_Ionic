import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProductPageRoutingModule } from './create-product-routing.module';

import { CreateProductPage } from './create-product.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { CorreiosService } from '../../services/correios.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    CreateProductPageRoutingModule
  ],
  declarations: [CreateProductPage],
  providers: [ProductService, CorreiosService]
})
export class CreateProductPageModule {}

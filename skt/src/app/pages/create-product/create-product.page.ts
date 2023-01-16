import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';

import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  productForm!:FormGroup;
  product!:Product;
  editable:boolean = false;
  @ViewChild('productFormGroupDirective') productFormGroupDirective!: FormGroupDirective;
  correiosService: any;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
    'id': new FormControl('', Validators.required),
    'name': new FormControl('', Validators.required),
    'amountPurchase': new FormControl('', Validators.required),
    'amountSold': new FormControl('', Validators.required),
    'stock': new FormControl('', Validators.required),
    'purchasePrice': new FormControl('', Validators.required),
    'percentage': new FormControl('', Validators.required),
    'saleValue': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'supplier': new FormControl('', Validators.required),
    'cnpj': new FormControl('', Validators.required)        
    });   
  }

  

  createProduct(values:any) {
    let newProduct: Product = {...values};
    this.productService.save(newProduct);      
    this.productFormGroupDirective.reset();
  }

  loadForm() {
    this.productForm.patchValue({
      name: this.product.name,
      amountPurchase: this.product.amountPurchase,
      amountSold: this.product.amountSold,
      stock: this.product.stock,
      purchasePrice: this.product.purchasePrice,
      percentage: this.product.percentage,
      saleValue: this.product.saleValue,
      phone: this.product.phone,
      supplier: this.product.supplier,
      cnpj: this.product.cnpj,         
    });
  }

  calc(): void {
    let purchasePrice = this.productForm.get('purchasePrice')?.value;
    let percentage = this.productForm.get('percentage')?.value;

    let calcVenda = purchasePrice + (purchasePrice * (percentage / 100));

    this.productForm.patchValue({
      saleValue: calcVenda
    })
  }

  calc2(): void {
    let amountSold = this.productForm.get('amountSold')?.value;
    let amountPurchase = this.productForm.get('amountPurchase')?.value;

    let calEstoque = amountPurchase - amountSold;

    this.productForm.patchValue({
      stock: calEstoque
      });
    }  
 }



import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {

  card:Variable;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.card = this.productService.cardno;
  
  }

  fetch(){
    console.log("paymentgateway")


    console.log(this.productService.cardno);

   
    this.productService.cardno.subscribe((data=>{
      this.card = data;
      console.log(this.card);
    }))

  }

}

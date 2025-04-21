// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-main-task',
//   templateUrl: './main-task.component.html',
//   styleUrls: ['./main-task.component.scss']
// })
// export class MainTaskComponent implements OnInit {


//   constructor() { }

//   ngOnInit(): void {

//   }

// }
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/mobile'; // adjust path if needed
import { ProductsServic } from '../../services/products.service'; // adjust path if needed

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent implements OnInit {
  


  productArr: Product[] = [];

  constructor(private productService: ProductsServic) {}

  ngOnInit(): void {
    this.productArr = this.productService.getMobiles();
   
    } 
     

  }


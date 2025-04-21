import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/mobile';
import { ProductsServic } from '../../services/products.service';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mobile-dashbord',
  templateUrl: './mobile-dashbord.component.html',
  styleUrls: ['./mobile-dashbord.component.scss']
})
export class MobileDashbordComponent implements OnInit {
  @Input() data!: Product;
  productArr: Product[] = [];

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  }

  constructor(private _productService: ProductsServic) {}

  ngOnInit(): void {
    this.productArr = this._productService.getMobiles();
   
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill('★'),
      ...(halfStar ? ['½'] : []),
      ...Array(emptyStars).fill('☆')
    ];
  }

  // increaseQuantity(): void {
  //   this.quantity++;
  // }

  // decreaseQuantity(): void {
  //   if (this.quantity > 1) {
  //     this.quantity--;
  //   }
  // }

  quantity = 1;

  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }
  
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  


removeTag(product: Product, tag: string): void {
  product.tags = product.tags?.filter(t => t !== tag);
}

// Set the product when needed (e.g. from productArr)

selectTab: string = 'Description';
tabData: string[] = ['Description', 'Details']; // List of tabs

// Example productArr data (you can load this from your service)
productArr01: Product[] = [ /* Your product array here */ ];


// isFavorite: boolean = false;

// onClick() {
//   this.isFavorite = !this.isFavorite;
// }



isFavorite = false;
showLikeMessage = false;

onClick() {
  this.isFavorite = !this.isFavorite;

  if (this.isFavorite) {
    this.showLikeMessage = true;

    setTimeout(() => {
      this.showLikeMessage = false;
    }, 2000); // hides message after 2 seconds
  }
}



}

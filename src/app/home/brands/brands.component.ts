import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// declare function initBrandsSlider(): void;

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor() {

    // initBrandsSlider();

   }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {

    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:false,
    autoWidth:true,
    items:8,
    margin:42,



  }

}

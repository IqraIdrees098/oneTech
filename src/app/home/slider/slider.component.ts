import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940:{
        items : 1
      }
    },
    // nav: true


    // items:1,
    // loop:true,
    // nav:false,
    // dots:true,
    // // dotsContainer: '.banner_2_dots',
    // smartSpeed:1200
  }

}

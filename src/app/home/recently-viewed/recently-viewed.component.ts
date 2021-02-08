import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
      0:{items:1},
      575:{items:2},
      768:{items:3},
      991:{items:6},
      1199:{items:6}
    }

  }

}

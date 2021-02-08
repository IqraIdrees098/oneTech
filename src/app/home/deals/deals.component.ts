import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

// declare  var jQuery:  any;



@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {

  }




  customOptions: OwlOptions = {
    // loop: true,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    // dots: false,
    // navSpeed: 700,
    // navText: ['deals_slider_prev', 'deals_slider_next'],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940:{
    //     items : 4
    //   }
    // },
    // nav: true
    items:1,
    loop:false,
    navText:['deals_slider_prev', 'deals_slider_next'],
    nav:false,
    dots:false,
    smartSpeed:1200,
    margin:30,
    autoplay:false,
    autoplayTimeout:5000
  }


  	/*

	20. Init Timer

	*/

 initTimer()
  {
    if($('.deals_timer_box').length)
    {
      var timers = $('.deals_timer_box');
      timers.each(function()
      {
        var timer = $(this);

        var targetTime;
        var target_date;

        // Add a date to data-target-time of the .deals_timer_box
        // Format: "Feb 17, 2018"
        if(timer.data('target-time') !== "")
        {
          targetTime = timer.data('target-time');
        target_date = new Date(targetTime).getTime();
        }
        else
        {
          var date = new Date();
          date.setDate(date.getDate() + 2);
          target_date = date.getTime();
        }

      // variables for time units
      var days, hours, minutes, seconds;

      var h = timer.find('.deals_timer_hr');
      var m = timer.find('.deals_timer_min');
      var s = timer.find('.deals_timer_sec');

      setInterval(function ()
      {
          // find the amount of "seconds" between now and target
          var current_date = new Date().getTime();
          var seconds_left = (target_date - current_date) / 1000;
          console.log(seconds_left);

          // do some time calculations
          days = seconds_left / 86400;
          seconds_left = seconds_left % 86400;

          hours = seconds_left / 3600;
          hours = hours + days * 24;
          seconds_left = seconds_left % 3600;


          minutes = seconds_left / 60;
          seconds = seconds_left % 60;

          if(hours.toString().length < 2)
          {
            hours = "0" + hours;
          }
          if(minutes.toString().length < 2)
          {
            minutes = "0" + minutes;
          }
          if(seconds.toString().length < 2)
          {
            seconds = "0" + seconds;
          }

          // display results
          h.text(hours);
          m.text(minutes);
          s.text(seconds);

      }, 1000);
      });
    }
  }









  }



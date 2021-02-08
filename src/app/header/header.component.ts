import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menuActive = false;
	 header:any ;
  constructor() { }

  ngOnInit(): void {
    this.setHeader();
    setTimeout(() => {

      this.header = $('.header')
    }, 1000);

    this.initCustomDropdown();
    this.initPageMenu();
  }






	// $(window).on('resize', function()
	// {
	// 	setHeader();
	// });

	/*

	2. Set Header

	*/

	 setHeader()
	{
		//To pin main nav to the top of the page when it's reached
		//uncomment the following

		// var controller = new ScrollMagic.Controller(
		// {
		// 	globalSceneOptions:
		// 	{
		// 		triggerHook: 'onLeave'
		// 	}
		// });

		// var pin = new ScrollMagic.Scene(
		// {
		// 	triggerElement: '.main_nav'
		// })
		// .setPin('.main_nav').addTo(controller);

		if(window.innerWidth > 991 && this.menuActive)
		{
			this.closeMenu();
		}
	}

	/*

	3. Init Custom Dropdown

	*/

	 initCustomDropdown()
	{
		if($('.custom_dropdown_placeholder').length && $('.custom_list').length)
		{
			var placeholder = $('.custom_dropdown_placeholder');
			var list = $('.custom_list');
		}

		placeholder.on('click',  (ev) =>
		{
			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}

			$(document).one('click', function closeForm(e)
			{
				if($(e.target).hasClass('clc'))
				{
					$(document).one('click', closeForm);
				}
				else
				{
					list.removeClass('active');
				}
			});

		});

		$('.custom_list a').on('click',  (ev) =>
		{
			ev.preventDefault();
			var index = $(this).parent().index();

			placeholder.text( $(this).text() ).css('opacity', '1');

			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}
		});


		$('select').on('change', function (e)
		{
			placeholder.text(this.value);

			$(this).animate({width: placeholder.width() + 'px' });
		});
	}

	/*

	4. Init Page Menu

	*/

	 initPageMenu()
	{
		if($('.page_menu').length && $('.page_menu_content').length)
		{
			var menu = $('.page_menu');
			var menuContent = $('.page_menu_content');
			var menuTrigger = $('.menu_trigger');

			//Open / close page menu
			menuTrigger.on('click', () =>
			{
				if(!this.menuActive)
				{
					this.openMenu();
				}
				else
				{
					this.closeMenu();
				}
			});

			//Handle page menu
			if($('.page_menu_item').length)
			{
				var items = $('.page_menu_item');
				items.each(function()
				{
					var item = $(this);
					if(item.hasClass("has-children"))
					{
						item.on('click', (evt) =>
						{
							evt.preventDefault();
							evt.stopPropagation();
							var subItem = item.find('> ul');
						    if(subItem.hasClass('active'))
						    {
						    	subItem.toggleClass('active');
                  // this.TweenMax.to(subItem, 0.3, {height:0});
						    }
						    else
						    {
						    	subItem.toggleClass('active');
						    	// this.TweenMax.set(subItem, {height:"auto"});
                  // this.TweenMax.from(subItem, 0.3, {height:0});
						    }
						});
					}
				});
			}
		}
	}

	 openMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		// this.TweenMax.set(menuContent, {height:"auto"});
		// this.TweenMax.from(menuContent, 0.3, {height:0});
		this.menuActive = true;
	}

	 closeMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		// this.TweenMax.to(menuContent, 0.3, {height:0});
		this.menuActive = false;
	}

}

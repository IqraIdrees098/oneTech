import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RegularPostComponent } from './regular-post/regular-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { CharacteristicsComponent } from './home/characteristics/characteristics.component';
import { DealsComponent } from './home/deals/deals.component';
import { PopularCategoriesComponent } from './home/popular-categories/popular-categories.component';
import { SliderComponent } from './home/slider/slider.component';
import { NewArrivalsComponent } from './home/new-arrivals/new-arrivals.component';
import { BestSellersComponent } from './home/best-sellers/best-sellers.component';
import { AdvertsComponent } from './home/adverts/adverts.component';
import { TrendsComponent } from './home/trends/trends.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { RecentlyViewedComponent } from './home/recently-viewed/recently-viewed.component';
import { BrandsComponent } from './home/brands/brands.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { CenterFooterComponent } from './footer/center-footer/center-footer.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { PostsComponent } from './blog/posts/posts.component';
import { HomeBlogPostComponent } from './blog-post/home-blog-post/home-blog-post.component';
import { SingleBlogPostComponent } from './blog-post/single-blog-post/single-blog-post.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { AddressComponent } from './contact/address/address.component';
import { FormComponent } from './contact/form/form.component';
import { MapComponent } from './contact/map/map.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    CategoriesComponent,
    ShopComponent,
    ProductComponent,
    CartComponent,
    BlogPostComponent,
    RegularPostComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CharacteristicsComponent,
    DealsComponent,
    PopularCategoriesComponent,
    SliderComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    AdvertsComponent,
    TrendsComponent,
    ReviewsComponent,
    RecentlyViewedComponent,
    BrandsComponent,
    NewsletterComponent,
    CenterFooterComponent,
    CopyrightComponent,
    TopBarComponent,
    NavigationComponent,
    BlogHomeComponent,
    PostsComponent,
    HomeBlogPostComponent,
    SingleBlogPostComponent,
    SingleProductComponent,
    AddressComponent,
    FormComponent,
    MapComponent,
    ShopSidebarComponent,
    ShopContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

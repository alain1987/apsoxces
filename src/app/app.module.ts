import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NavBarComponent } from './htmlComponents/nav-bar/nav-bar.component';
import { SideBarComponent } from './htmlComponents/side-bar/side-bar.component';
import { OffersCarouselComponent } from './htmlComponents/offers-carousel/offers-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShopDetailComponent,
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent,
    OffersCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

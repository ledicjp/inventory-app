import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from "./products-list.component";
import {ProductImageComponent} from "./product-image.component";
import {ProductDepartmentComponent} from "./product-department.component";
import {ProductRowComponent} from "./product-row.component";
import {PriceDisplayComponent} from "./price-display.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductRowComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

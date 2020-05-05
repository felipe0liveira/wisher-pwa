import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WisherRoutingModule } from './wisher-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { WisherFormComponent } from './components/wisher-form/wisher-form.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HomeComponent, CategoryMenuComponent, WisherFormComponent, HeaderComponent],
  imports: [
    CommonModule,
    WisherRoutingModule,
    ReactiveFormsModule
  ]
})
export class WisherModule { }

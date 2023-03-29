import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavierlimachiRoutingModule } from './javierlimachi-routing.module';
import { JavierlimachiComponent } from './javierlimachi.component';


@NgModule({
  declarations: [
    JavierlimachiComponent
  ],
  imports: [
    CommonModule,
    JavierlimachiRoutingModule
  ]
})
export class JavierlimachiModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavierlimachiComponent } from './javierlimachi.component';

const routes: Routes = [{ path: '', component: JavierlimachiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavierlimachiRoutingModule { }

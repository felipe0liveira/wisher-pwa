import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';



@NgModule({
  declarations: [AlertBoxComponent],
  exports: [AlertBoxComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

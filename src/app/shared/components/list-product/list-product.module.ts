import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListProductComponent } from './list-product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListProductComponent],
  exports: [ListProductComponent],
})
export class ListProductModule {}

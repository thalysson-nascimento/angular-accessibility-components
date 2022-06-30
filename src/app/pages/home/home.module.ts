import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListProductModule } from '@components/list-product/list-product.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, ListProductModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}

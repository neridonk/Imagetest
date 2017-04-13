import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImagesPanelComponent } from './components/images-panel/images-panel.component';
import { InfinityScrollDirective } from './components/infinity-scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent, ImagesPanelComponent, InfinityScrollDirective],
  declarations: [LoadingComponent, ImagesPanelComponent, InfinityScrollDirective],
  providers: []
})
export class GlobalModule { }

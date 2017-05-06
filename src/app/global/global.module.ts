import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImagesPanelComponent } from './components/images-panel/images-panel.component';
import { InfinityScrollDirective } from './components/infinity-scroll.directive';
import { PageComponent } from './components/images-panel/page/page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [LoadingComponent, ImagesPanelComponent, InfinityScrollDirective],
  declarations: [LoadingComponent, ImagesPanelComponent, InfinityScrollDirective, PageComponent],
  providers: []
})
export class GlobalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImagesPanelComponent } from './components/images-panel/images-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent, ImagesPanelComponent],
  declarations: [LoadingComponent, ImagesPanelComponent],
  providers: []
})
export class GlobalModule { }

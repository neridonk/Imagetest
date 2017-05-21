import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImagesPanelComponent } from './components/images-panel/images-panel.component';
import { InfinityScrollDirective } from './components/infinity-scroll.directive';
import { PageComponent } from './components/images-panel/page/page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CropperDirective } from '../add-picture/cropper/cropper.directive';

import { CropperComponent } from '../add-picture/cropper/cropper.component';
import { PickadateDirective } from '../add-picture/pickadate.directive';
import { FormatDatePipe } from '../about/format-date.pipe';
import { AutofocusDirective } from '../login/autofocus.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [AutofocusDirective,FormatDatePipe,PickadateDirective, CropperComponent, CropperDirective, LoadingComponent, ImagesPanelComponent, InfinityScrollDirective, AboutComponent],
  declarations: [AutofocusDirective,FormatDatePipe,PickadateDirective, CropperComponent, CropperDirective, LoadingComponent, ImagesPanelComponent, InfinityScrollDirective, PageComponent, AboutComponent],
  providers: []
})
export class GlobalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview.component';
import { NameListService } from '../shared/services/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
  providers: [NameListService]
})
export class OverviewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { NameListService } from '../shared/services/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  providers: [NameListService]
})
export class ProfileModule { }

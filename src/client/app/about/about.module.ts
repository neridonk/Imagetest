import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/services/index';

@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [AboutComponent],
    exports: [AboutComponent],
    providers:[NameListService]
})

export class AboutModule { }

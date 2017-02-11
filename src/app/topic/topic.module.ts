import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GlobalModule } from '../global/global.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    GlobalModule,
    CommonModule,
    TopicRoutingModule
  ],
  declarations: [TopicComponent, FitnessComponent]
})
export class TopicModule { }

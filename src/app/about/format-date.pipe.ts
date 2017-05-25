﻿import { Pipe, PipeTransform } from '@angular/core';
 import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform
{

  transform(value: any, format: string = "MMMM Do YYYY "): string
  {
    // Try and parse the passed value.
    var momentDate = moment(value);

    // If moment didn't understand the value, return it unformatted.
    if (!momentDate.isValid()) return value;

    // Otherwise, return the date formatted as requested.
    return momentDate.format(format);
  }

}

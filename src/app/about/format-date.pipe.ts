﻿import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform
{

  transform(dateData: any): any
  {
    dateData = dateData + 'Z';
    var d = new Date(dateData);

    var hours = d.getUTCHours();
    var min = (d.getUTCMinutes() < 10 ? '0' : '') + d.getUTCMinutes();

    var datestring = ("0" + d.getUTCDate()).slice(-2) + "." + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "." +
      d.getFullYear();
    return datestring;
  }

}

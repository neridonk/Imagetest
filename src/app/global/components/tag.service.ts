import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceClass } from '../services/ServiceClass';
import { Tag } from 'models';


@Injectable()
export class TagService extends ServiceClass{

  constructor(http: Http)
  {
        super(http);
  }


  getAllTags(): Observable<any>
  {
    return this.get('getAllTags.php','').map((response: any) =>
    {
      return <any>response.json();
    });
  }


  addNewTag(tag: Tag): Observable<any>
  {

    return this.post('addNewTag.php', tag).map((response: any) =>
    {
      return <any>response.json();
    });
  }

}

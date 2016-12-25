import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './BaseServices';
import { Images, Topic, User } from '../../models/AllModels';

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService extends BaseService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(http: Http) {

    super(http);
  }

  addNewPictures(topic: Topic, beforeImg: Images, afterImg: Images): Observable<any> {

    var formData = { 'Topic': topic, 'beforeImg': beforeImg, 'afterImg': afterImg };

    return this.post('addnewTopic.php', formData).map((response: any) => {
      return <any>response.json();
    });
  }


  register(user: User): Observable<any> {

    var formData = { 'user': user };

    return this.post('newUser.php', formData).map((response: any) => {
      return <any>response.json();
    });
  }

  login(user: User): Observable<any> {

    var param = 'name=' + user.name + '&password=' + user.password;

    return this.get('login.php', param).map((response: any) => {
      return <any>response.json();
    });
  }


  getAllTopics(): Observable<any> {

    return this.get('getAllTopics.php', '').map((response: any) => {
      return <any>response.json();
    });
  }

  getTopicbyId(id: any): Observable<any> {

    return this.get('getTopicById.php', 'id=' + id).map((response: any) => {
      return <any>response.json();
    });
  }
}


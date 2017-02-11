import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './BaseServices';
import { Images, Topic, User,Comment } from '../../models';
import { ParentComponent } from '../components/ParentComponent';
import 'rxjs/add/operator/map'
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
    this.hideLoading();
  }


  getCommentsbyId(id: any): Observable<any> {
    this.showLoading();
    return this.get('getCommentsById.php', 'id=' + id).map((response: any) => {
      this.hideLoading();
      return <any>response.json();
    });
  }

  addNewComment(comment : Comment): Observable<any> {

    this.showLoading();
    return this.post('addNewPost.php', comment).map((response: any) => {
                  this.hideLoading();
      return <any>response.json();
    });
  }



  addNewPictures(topic: Topic, beforeImg: Images, afterImg: Images): Observable<any> {

    var formData = { 'Topic': topic, 'beforeImg': beforeImg, 'afterImg': afterImg };
    this.showLoading();

    return this.post('addnewTopic.php', formData).map((response: any) => {
                  this.hideLoading();
      return <any>response.json();
    });
  }

   removeTopic(imgId:number): Observable<any> {

    var param = 'id=' + imgId;
    this.showLoading();

    return this.get('removeTopic.php', param).map((response: any) => {
                  this.hideLoading();

      return <any>response.json();
    });
  }

     removePicture(imgId:number): Observable<any> {

    var param = 'id=' + imgId;
    this.showLoading();

    return this.get('removeImage.php', param).map((response: any) => {
                  this.hideLoading();
      return <any>response.json();
    });
  }

  addNewPictureToTopic(topicid:number, afterImg: Images): Observable<any> {

    var formData = { 'topicid': topicid,'afterImg': afterImg };
    this.showLoading();

    return this.postXFrom('addNewPictureToTopic.php', formData).map((response: any) => {    
              this.hideLoading();
      return <any>response.json();
    });
  }


  register(user: User): Observable<any> {

    var formData = { 'user': user };
    this.showLoading();

    return this.post('newUser.php', formData).map((response: any) => {
            this.hideLoading();
      return <any>response.json();
    });
  }

  login(user: User): Observable<any> {

    var param = 'name=' + user.name + '&password=' + user.password;
    this.showLoading();

    return this.get('login.php', param).map((response: any) => {
            this.hideLoading();
     return <any>response.json();
    });
  }


  getAllTopics(currentRow : number): Observable<any> {

    var param = 'currentRow='+currentRow;
    this.showLoading();
    return this.get('getAllTopics.php', param).map((response: any) => {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getTopicbyId(id: any): Observable<any> {
    this.showLoading();
    return this.get('getTopicById.php', 'id=' + id).map((response: any) => {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getUserbyId(id: any): Observable<any> {
    this.showLoading();
    return this.get('getUserbyId.php', 'id=' + id).map((response: any) => {
      this.hideLoading();
      return <any>response.json();
    });
  }



  public showLoading(){
    ParentComponent.loadingShow();
  }

  public hideLoading(){
    ParentComponent.loadingHide();
  }

}


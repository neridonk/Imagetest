import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceClass } from './ServiceClass';
import { Images, Topic, User, Comment } from '../../models';
import { ParentClass } from '../components/ParentClass';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging


/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService extends ServiceClass
{
  public picURL: string = "";
  public text: string = "";
  public static user: User;
  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(http: Http)
  {

    super(http);
    this.hideLoading();


  }

  public initUser(cst): Promise<User>
  {
    return new Promise((resolve, reject) =>
    {
      if (NameListService.user != null)
      {
        resolve(NameListService.user);
        return;
      }

      this.getUserbyCst(cst).subscribe(
        data =>
        {
          NameListService.user = data;
          resolve(NameListService.user);
        },
        err => err
      );
    });
  }

  updateTopic(id: any): Observable<any>
  {
    this.showLoading();
    return this.get('upvoteTopic.php', 'id=' + id).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getCommentsbyId(id: any): Observable<any>
  {
    this.showLoading();
    return this.get('getCommentsById.php', 'id=' + id).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  addNewComment(comment: Comment): Observable<any>
  {

    return this.post('addNewPost.php', comment).map((response: any) =>
    {
      return <any>response.json();
    });
  }



  addNewPictures(topic: Topic, beforeImg: Images, afterImg: Images): Observable<any>
  {

    var formData = { 'Topic': topic, 'beforeImg': beforeImg, 'afterImg': afterImg };
    this.showLoading();

    return this.post('addnewTopic.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  removeTopic(imgId: number): Observable<any>
  {

    var param = 'id=' + imgId;
    this.showLoading();

    return this.get('removeTopic.php', param).map((response: any) =>
    {
      this.hideLoading();

      return <any>response.json();
    });
  }

  removePicture(imgId: number): Observable<any>
  {

    var param = 'id=' + imgId;
    this.showLoading();

    return this.get('removeImage.php', param).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  addNewPictureToTopic(topicid: number, afterImg: Images): Observable<any>
  {

    var formData = { 'topicid': topicid, 'afterImg': afterImg };
    this.showLoading();

    return this.postXFrom('addNewPictureToTopic.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }


  register(user: User): Observable<any>
  {

    var formData = { 'user': user };
    this.showLoading();

    return this.post('newUser.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  login(user: User): Observable<any>
  {

    var param = 'name=' + user.name + '&password=' + user.password;
    this.showLoading();

    return this.get('login.php', param).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getFollower(topicId: number): Observable<any>
  {
    var param = 'topicid=' + topicId;
    return this.get('getFollowersBytopicId.php', param).map((response: any) =>
    {
      return <any>response.json();
    });
  }

  addFollower(topicId: number): Observable<any>
  {
    var param = 'topicid=' + topicId;
    this.showLoading();

    return this.get('addNewFollower.php', param).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }


  removeFollower(topicId: number): Observable<any>
  {
    var param = 'topicid=' + topicId;
    this.showLoading();

    return this.get('removeFollower.php', param).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }


  getAllTopics(currentRow: number, category: string, search: string): Observable<Topic[]>
  {
    var param = 'currentRow=' + currentRow + '&category=' + category + '&search=' + search;
    return this.get('getAllTopics.php', param).map((response: any) =>
    {
      return <Topic[]>response.json();
    });
  }

  getAllFeaturedTopics(category: string): Observable<Topic[]>
  {
    var param = 'category=' + category;
    return this.get('getAllFeatured.php', param).map((response: any) =>
    {
      return <Topic[]>response.json();
    });
  }

  getAllHallOfFame(): Observable<Topic[]>
  {
    return this.get('getAllHallOfFame.php', '').map((response: any) =>
    {
      return <Topic[]>response.json();
    });
  }

  getTopicbyId(id: any): Observable<any>
  {
    this.showLoading();
    return this.get('getTopicById.php', 'id=' + id).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getUserbyId(id: any): Observable<any>
  {
    this.showLoading();
    return this.get('getUserbyId.php', 'id=' + id).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getUserbyCst(cst: any): Observable<any>
  {
    this.showLoading();
    return this.get('getUserByCst.php', 'cst=' + cst).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  getFollowerActivities(cst: any): Observable<any>
  {
    this.showLoading();
    return this.get('getFollowerActivities.php', 'cst=' + cst).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  updateUserImg(img: any): Observable<any>
  {
    var formData = { 'img': img };

    this.showLoading();
    return this.post('UpdateProfileImage.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  updateUserBio(text: any): Observable<any>
  {
    var formData = { 'text': text };

    this.showLoading();
    return this.post('UpdateProfileBio.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  updateImageText(text: any, imgid: number): Observable<any>
  {
    var formData = { 'text': text, 'imgid': imgid };

    this.showLoading();
    return this.post('UpdateImageText.php', formData).map((response: any) =>
    {
      this.hideLoading();
      return <any>response.json();
    });
  }

  public showLoading()
  {
    ParentClass.loadingShow();
  }

  public hideLoading()
  {
    ParentClass.loadingHide();
  }

}


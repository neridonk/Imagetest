import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Images, Topic, User, Tag } from '../models';
import { NameListService } from '../global/services/name-list.service';
import { ParentClass } from 'components';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit
{
  public countries: any[] = new Array();
  public tags: Tag[] = new Array();
  public userTagstags: Tag[] = new Array();

  @Input()
  public isVisible: boolean = false;

  @Output()
  public isVisibleChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public user: User;

  public countryOfUser: any;

  constructor(private nameListService: NameListService) { }

  ngOnInit()
  {
    this.nameListService.getAllCountries().subscribe(
      data =>
      {
        this.countries = data;
      },
      err => alert(JSON.stringify(err)));

    this.nameListService.getTagsByUserId(this.user.userid).subscribe(
      data =>
      {
        this.userTagstags = data;
      },
      err => alert(JSON.stringify(err)));

    this.countryOfUser = { 'id': 0, 'name': this.user.country };
  }

  selectCountry(country: any)
  {
    this.user.country = country.name;
  }

  public changeImage()
  {
    this.nameListService.updateUserImg(this.user.img).subscribe(
      data =>
      {
        alert('success');
      },
      err => alert(JSON.stringify(err))
    );

  }

  public updateUser()
  {
    this.nameListService.updateUser(this.user).subscribe(
      data =>
      {
        alert('success');
      },
      err => alert(JSON.stringify(err))
    );

  }

  public logout()
  {
    localStorage.clear();
    location.href = '/';
  }

  addNewTag(tags: Tag[])
  {
    this.tags = tags;
  }

  updateTags()
  {
    this.nameListService.deleteTags(this.user.userid).subscribe(
      data =>
      {
        this.addNewTags();
      },
      err => alert(JSON.stringify(err))
    );
  }

  hide()
  {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  addNewTags()
  {
    this.tags.forEach((tag) =>
    {
      tag.UserId = Number(this.user.userid);
    });

    ParentClass.loadingShow();
    Promise.all(this.tags.map((tag) =>
    {
      return new Promise((resolve) =>
      {
        setTimeout(() =>
        {
          this.nameListService.addNewTag(tag, this.user.userid).toPromise().then(() =>
          {

            resolve.apply('');
          });
        }, 1000);

      });

    })).then((d) =>
    {
      ParentClass.loadingHide();
      alert('success');
    });


  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Images, Topic, User } from '../models';
import { NameListService } from '../global/services/name-list.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit
{

  @Input()
  public user: User;

  constructor(private nameListService: NameListService) { }

  ngOnInit()
  {
  }

  public changeImage()
  {
    this.nameListService.updateUserImg(this.user.img).subscribe(
      data =>
      {
      },
      err => alert(JSON.stringify(err))
    );

  }

  public changeBio()
  {
    this.nameListService.updateUserBio(this.user.bio).subscribe(
      data =>
      {
      },
      err => alert(JSON.stringify(err))
    );

  }

  public logout()
  {
    localStorage.clear();
    location.href = '/';
  }
}

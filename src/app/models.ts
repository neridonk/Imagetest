﻿export class Images
{


  constructor(
    public imgid?: number,
    public date?: Date,
    public url?: string,
    public description?: string,
    public topicid?: number,
    public picdate?: Date,
    public base64?: string,
    public checked?: boolean

  )
  {

  }

}

export class responseModel
{


  constructor(
    public status?: string,//bei result false wenn mysqli fehlschlug
    public code?: string

  )
  {

  }

}

export class croppData
{


  constructor(
    public Cropper?: any,
    public x?: string,
    public y?: string,
    public w?: string,
    public h?: string,
    public cData?: any,
    public base64: string = ''

  )
  {

  }

}



export class Topic
{

  constructor(
    public topicid?: number,
    public title?: string,
    public category?: string,
    public youtube?: string,
    public isFeatured?: number,
    public userid?: number,
    public date?: Date,
    public upvote?: number,
    public images?: Images[],
    public comments?: Comment[],
    public user?: User,
    public isOnswitch: boolean = false,
    public currentPos: number = 0
  )
  {

  }

}

export class Comment
{

  constructor(
    public commentid?: number,
    public userid?: number,
    public topicid?: number,
    public texts?: string,
    public datum?: Date,
    public user?: User

  )
  {

  }

}

export class User
{

  constructor(
    public userid?: number,
    public isVerified?: number,
    public name?: string,
    public paypalMail?: string,
    public country?: string,
    public postalcode?: number,
    public email?: string,
    public password?: string,
    public cst?: string,
    public img?: string,
    public bio?: string,
    public topic?: Topic[],
    public tags?: Tag[]
  )
  {

  }

}

export class Marker
{
  constructor(
    public user?: User,
    public Id?: number,
    public iconUrl?: any,
    public label?: string,
    public postalcode?: number,
    public image?: string,
    public lat?: string,
    public lng?: string)
  {
  }
}

export class Tag
{
  constructor(
    public Id?: number,
    public UserId?: number,
    public Name?: string)
  {
  }
}

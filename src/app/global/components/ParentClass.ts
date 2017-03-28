import { Component, Inject, Injector  } from '@angular/core';

declare var $: any;

export class ParentClass
{
  private static isloading: boolean = false;

  protected static userId;

  constructor()
  {
  }

  public userId() 
  {
    return Number(localStorage.getItem('userid'));
  }

  public static loadingHide(): void 
  {
      ParentClass.isloading = false;
  }

  public static loadingShow(): void 
  {
      ParentClass.isloading = true;
  }

  public isLoading(): boolean 
  {
      return ParentClass.isloading;
  }

}
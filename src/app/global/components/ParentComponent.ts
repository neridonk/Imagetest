import { Component, Inject, Injector  } from '@angular/core';

declare var $: any;

export class ParentComponent
{
  private static isloading: boolean = false;

  constructor()
  {
  }

  public static loadingHide(): void 
  {
    ParentComponent.isloading = false;
  }

  public static loadingShow(): void 
  {
    ParentComponent.isloading = true;
  }

  public isLoading(): boolean 
  {
    return ParentComponent.isloading;
  }

}
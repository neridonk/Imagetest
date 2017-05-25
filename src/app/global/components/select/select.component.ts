import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent
{
  @Input()
  public text: string = 'Select a country';

  @Input()
  public items: any[] = new Array();

  public unfilteredItems: any[] = new Array();

  @Input()
  public selectedItem: any;

  @Output()
  public selectedItemChange: EventEmitter<any> = new EventEmitter();

  @Output()
  public click: EventEmitter<any> = new EventEmitter();

  public isChoosing = false;
  public boxSize: string = '0px';
  public searchValue: string = '';
  public isSearchFocus: boolean = false;

  constructor()
  {
  }

  public hideList(): void
  {
    this.isChoosing = false;
    this.boxSize = '0px';
    this.resetFiltered();
    this.isSearchFocus = false;
  }

  public showList(event: Event, ele: HTMLInputElement = null): void
  {
    event.preventDefault();
    event.stopPropagation();

    if (this.isChoosing)
    {
      this.hideList();
      return;
    }

    this.isChoosing = true;
    this.boxSize = '200px';

    this.isSearchFocus = true;
    this.click.emit();
  }

  public selectItem(item: any, event: Event): void
  {
    event.preventDefault();
    event.stopPropagation();

    this.selectedItem = item;
    this.selectedItemChange.emit(this.selectedItem);
    this.hideList();
  }

  public filter(): void
  {

    if (this.items == null)
    {
      return;
    }

    if (this.unfilteredItems.length == 0)
    {
      this.unfilteredItems = this.items;
    }

    if (this.searchValue == '')
    {
      this.items = this.unfilteredItems;
      return;
    }

    this.items = this.unfilteredItems.filter(o => o.name != null && o.name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }

  public keyupHandler(keycode: number)
  {
    if (keycode == 38)
    {
      this.selectedItem = this.items[this.items.indexOf(this.selectedItem) - 1];
      this.selectedItemChange.emit(this.selectedItem);
      return;
    }

    if (keycode == 40)
    {
      this.selectedItem = this.items[this.items.indexOf(this.selectedItem) + 1];
      this.selectedItemChange.emit(this.selectedItem);
      return;
    }


    this.filter();
  }

  private resetFiltered()
  {

    if (this.unfilteredItems.length == 0)
    {
      return;
    }

    this.searchValue = '';
    this.items = Object.assign(this.unfilteredItems);
    this.unfilteredItems = new Array();
  }

}

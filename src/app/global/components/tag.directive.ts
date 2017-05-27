import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from './tag.service';
import { ParentClass } from 'components';
import { Tag } from 'models';
declare var $: any;

@Directive({
  selector: '[tag]'
})
export class TagDirective extends ParentClass implements AfterViewInit
{
  public tags: Tag[] = new Array();

  public _existTags: Tag[] = new Array();
  public addedTags: Tag[] = new Array();

  @Output()
  public onTag: EventEmitter<Tag[]> = new EventEmitter();

  @Input()
  public existTags(tags: Tag[])
  {
    this._existTags = tags;
  }

  constructor(
    private tagService: TagService,
    private _elementRef: ElementRef)
  {
    super();
  }

  ngAfterViewInit()
  {

    this.tagService.getAllTags().subscribe(
      data => this.tags = data,
      err => alert(err),
      () => this.initTags()
    );

  }

  private initTags()
  {
    let dataList = {};

    this.tags.forEach((tag: Tag) =>
    {
      dataList[tag.Name] = null;
    });

    let existsList: TagObj[] = new Array();

    this._existTags.forEach((tag: Tag) =>
    {
      existsList.push(new TagObj(tag.Name))
    });

    $(this._elementRef.nativeElement).material_chip({
      data: existsList,
      autocompleteOptions: {
        data: dataList,
        secondaryPlaceholder: '+Tag',
        limit: 5,
        minLength: 1
      }
    });

    $(this._elementRef.nativeElement).on('chip.add', (e, chip) =>
    {
      if (this.tags.find(o => o.Name == chip.tag) == null)
      {
        this.addedTags.push(new Tag(0, 0, chip.tag));
        this.onTag.emit(this.addedTags);
      }
      else
      {
        this.addedTags.push(this.tags.find(o => o.Name == chip.tag));
        this.onTag.emit(this.addedTags);
      }

    });
  }
}

export class TagObj
{
  constructor(
    public tag?: string)
  {
  }
}

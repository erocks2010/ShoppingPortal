import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/Rx';

declare var $: any;

@Directive({
  selector: '[navMenu]'
})
export class NavMenuDirective {
  @Input() items: any;
  itemArray: Array<number>;
  itemUIArray: Array<any>;
  elem: any;

  constructor(private el: ElementRef) {
    this.itemUIArray = [];
    setTimeout(() => {
      this.createOutline();
    }, 1)
  }

  /*
  * Adding the rows and items to display in a particular row
  * */
  insertItemsinArray() {
    switch (parseInt(this.items.length.toString())) {
      case 10:
        this.itemArray = [4, 3, 2, 1];
        break;
      case 9:
        this.itemArray = [5, 3, 1];
        break;
      case 8:
        this.itemArray = [4, 3, 1];
        break;
      case 7:
        this.itemArray = [4, 3];
        break;
      case 6:
        this.itemArray = [3, 2, 1];
        break;
      case 5:
        this.itemArray = [3, 2];
        break;
      case 4:
        this.itemArray = [2, 2];
        break;
      case 3 :
        this.itemArray = [2, 1];
        break;
      case 2:
        this.itemArray = [2];
        break;
      default:
        this.itemArray = [1];
        break;
    }
  }

  /*
  * Adding divs for row and adding items as divs within row divs.
  * */
  createOutline() {
    this.insertItemsinArray();
    $(this.el.nativeElement).append(`<div class="hamburgerMenu"></div>`)
    for (let i = 0; i < this.itemArray.length; i++) {
      let height = [], width = 0;
      $(this.el.nativeElement).append(`<div class= 'navRow${i}'</div>`);
      for (let j = 0; j < this.itemArray[i]; j++) {
        width += this.items[i + j].width;
        height.push(this.items[i + j].height);
        $(`.navRow${i}`).append(`
        <div class='item${j}' 
        style='width:${this.items[i + j].width}px;
        height:${this.items[i + j].height}px;
        background-color:${this.items[i + j].background_color};
        color:${this.items[i + j].color}
        '>
          <!--<span>${this.items[i + j].displayValue}</span>-->
        </div>`)
        $(`.navRow${i} .item${j}`).hide();
        this.itemUIArray.push($(`.navRow${i} .item${j}`))
      }
      $(`.navRow${i}`).css('width', '' + (width + 20) + 'px');
      $(`.navRow${i}`).css('height', '' + (Math.max(...height)) + 'px');
      $('<br>').insertAfter($(`.navRow${i}`));
    }
    this.bindEvents();
  }

  bindEvents() {
    //Binding event to HamburgerMenu
    $('.hamburgerMenu').on('click', () => {
      this.showItems();
      $('.hamburgerMenu').toggle("scale", 100);
    })

    //Binding events to Items
    let $Obs = Observable.fromEvent($('.navRow0,.navRow1'), 'mouseout');
    $Obs.subscribe(() => {
      console.log('hi')
    })

  }

  showItems() {
    this.itemUIArray.forEach((item, i) => {
      Observable.timer(100 * (i + 1)).subscribe(() => {
        item.toggle('scale', 300);
      });
    })
  }


}

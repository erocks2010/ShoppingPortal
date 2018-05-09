import {Component, OnInit} from '@angular/core';

interface Item {
  width: number,
  height: number,
  displayValue: string,
  link: string,
  background_color: string,
  text_color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Array<Item>

  ngOnInit() {
    this.items = [{
      width: 200,
      height: 100,
      displayValue: "ITEM1",
      link: "/item1",
      background_color: "green",
      text_color: "black"
    }, {
      width: 100,
      height: 100,
      displayValue: "ITEM1",
      link: "/item1",
      background_color: "green",
      text_color: "black"
    }, {
      width: 100,
      height: 100,
      displayValue: "ITEM1",
      link: "/item1",
      background_color: "green",
      text_color: "black"
    }, {
      width: 100,
      height: 100,
      displayValue: "ITEM1",
      link: "/item1",
      background_color: "green",
      text_color: "black"
    }, {
      width: 100,
      height: 100,
      displayValue: "ITEM1",
      link: "/item1",
      background_color: "green",
      text_color: "black"
    }]
  }
}

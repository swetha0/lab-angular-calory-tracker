import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { foodItems } from './../../foodItems'

@Component({
  selector: 'app-todays-food',
  templateUrl: './todays-food.component.html',
  styleUrls: ['./todays-food.component.css']
})
export class TodaysFoodComponent implements OnInit {

  items: foodItems[];
  newItem: any = {};
  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
  addCount(count, item): any {
    item.count += count;
  }
}

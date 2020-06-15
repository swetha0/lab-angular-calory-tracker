import { Component, OnInit } from '@angular/core';
import { items } from '../../items';
import { foodItems } from './../../foodItems';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  items: foodItems[];
  newItem: any = {};

  ngOnInit(): void {
    this.items = items;
  }
  addcount(count, obj): any {
    obj.count += parseInt(count);
  }

}

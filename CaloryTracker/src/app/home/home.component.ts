import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { foodItems } from './../../foodItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: foodItems[];
  newItem: any = {};
  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0,
    };

    this.foodItems.unshift(newFood);

    this.isEditing = true;
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
  }
}
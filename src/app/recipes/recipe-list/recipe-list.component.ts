import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('My Recipe', 'Some test description', 'http://seshka.com.ua/wp-content/uploads/2017/03/hamburger-min.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}

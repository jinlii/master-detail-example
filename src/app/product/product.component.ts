import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', //  CSS selector, app-product represents an element by this name
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// TypeScript class
export class ProductComponent implements OnInit {
  title = 'USB Stick 8GB';
  itemCount = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
   this.itemCount++;
 }
 
}

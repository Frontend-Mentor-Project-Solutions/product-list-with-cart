import { Component } from '@angular/core';
import products from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products = products;
}

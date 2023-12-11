import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent{

  toppings = new FormControl([]);
  toppingInput = new FormControl();
  toppingList: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'];

  filteredToppingList: Observable<string[]>;

  toppingInputValue = ''; // Property to store the input value

  onInputChange(event: any): void {
    this.toppingInputValue = event.target.value;
  }

  constructor() {
    this.filteredToppingList = this.toppingInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string | string[]): string[] {
    const filterValue = Array.isArray(value) ? value[0] : value;
    const lowerCaseFilterValue = filterValue.toLowerCase();

    return this.toppingList.filter(topping => topping.toLowerCase().includes(lowerCaseFilterValue));
  }

  
}

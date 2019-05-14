import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menus.model';
import { take, map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) { }

  addMenu(
        productName: string,
        itemType: string,
        category: string,
        subCategory: string,
        description: string,
        dateAvailability: Date,
        preparationTime: number,
        orderCapacity: number,
        exchange: string,
        sellerId: string
  ) {
    const newMenu = new Menu(
                            Math.random().toString(),
                            productName,
                            itemType,
                            category,
                            subCategory,
                            description,
                            dateAvailability,
                            preparationTime,
                            orderCapacity,
                            exchange,
                            sellerId);
    let genId: string;
    return this.http.post <{name: string}> ('https://myionic-363fb.firebaseio.com/menu-item.json',
                                            {...newMenu, id: null});
                                            //.pipe(switchMap(resData => {
                                            //  genId = resData.name;
                                            //  console.log('hello');
                                            //}));



  }
}

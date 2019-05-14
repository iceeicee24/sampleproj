import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.page.html',
  styleUrls: ['./new-menu.page.scss'],
})
export class NewMenuPage implements OnInit {

  form: FormGroup;

  constructor(
            private menusService: MenusService
  ) { }

  ngOnInit() {
  }

  clkAddMenu() {
    console.log('click');
  }

  onSubmit(form: NgForm) {
    this.menusService.addMenu(
                      form.value.productName,
                      form.value.itemType,
                      form.value.category,
                      form.value.subCategory,
                      form.value.description,
                      new Date(form.value.dateAvailability),
                      +form.value.preparationTime,
                      +form.value.orderCapacity,
                      form.value.exchange,
                      '100'
    ).subscribe();
  }

}

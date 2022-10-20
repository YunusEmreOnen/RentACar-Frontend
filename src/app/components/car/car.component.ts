import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: any = {
    carId: 1,
    carName: 'Bmw',
    brandId: 1,
    colorId: 2,
  };
  car1: any = {
    carId: 1,
    carName: 'Mercedes',
    brandId: 1,
    colorId: 2,
  };
  car2: any = {
    carId: 1,
    carName: 'Audi',
    brandId: 1,
    colorId: 2,
  };
  car3: any = {
    carId: 1,
    carName: 'Ford',
    brandId: 1,
    colorId: 2,
  };

  cars=[this.car,this.car1,this.car2,this.car3];
  constructor() { }

  ngOnInit(): void {
  }

}

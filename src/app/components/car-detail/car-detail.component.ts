import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[]=[];
  images: CarImage[] = [];
  imageLoaded:boolean=false;

  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"])
          this.getCarImages(params["carId"])
        }
      })

  }

  getCarDetails(carId: number) {
    this.carDetailService.getCarDetail(carId).subscribe((response) => {
      this.cars =response.data;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.images=response.data;
    });
  }

  getImageSource(image:CarImage):string{
    let url:string="https://localhost:44336/Uploads/Images/"+image.imagePath
    return url
  }

  getImageClass(){
    if(this.imageLoaded==false){
      return 'carousel-item active';
    }else{
      return 'carousel-item'
    }
  }

  
}

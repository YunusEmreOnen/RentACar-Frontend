import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl:string='https://localhost:44336/api/carimages/getcarimagebycarid?carId='
  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath:string=this.apiUrl+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}

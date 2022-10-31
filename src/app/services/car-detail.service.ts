import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
apiUrl:string='https://localhost:44336/api/cars/getcardetailsbycarid?carId='
  constructor(private httpClient:HttpClient) {
   }

   getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath:string=this.apiUrl+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
   }
}

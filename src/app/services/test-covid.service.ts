import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestCovidService {
  title = 'Angular Example';
  products: any = [];

  constructor(private httpClient: HttpClient){}
 

  load(){
    return new Promise((resolve, reject) => {
      this.httpClient.get("assets/data/questions_test_covid.json")
      .subscribe(data =>{
        resolve(data)
      })

    });

}
}

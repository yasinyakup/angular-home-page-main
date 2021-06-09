import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  lanData: any;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get("../assets/i18n/en.json").pipe( map(this.extractData));
  }

  updateProperty(item: String){
    this.getAll().subscribe(data=>this.lanData=data);
    console.log(this.lanData);
    
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  save(data:any){
    this.httpClient.post<any>("../assets/i18n/test.json", data).subscribe({
      next: data=>{
      console.log(data);
    },
    
    error: error => {
       console.error('There was an error!', error.message);
    }
      
    
  })
  }
}

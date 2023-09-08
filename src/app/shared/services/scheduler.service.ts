import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private apiUrl = 'https://myleprisme-ws-c4b7e0e65060.herokuapp.com/';
  constructor(private http: HttpClient) { }

  postPlanning(planning:any){
    return this.http.put(this.apiUrl+ "updatePlanning/",{params: new HttpParams().set('b', planning) })
  }
  getPlanning(){
    return this.http.get(this.apiUrl+"getPlanning");
  }
}


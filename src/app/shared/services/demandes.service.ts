import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  private ApiUrl = 'http://localhost:3000/alldemandes'; 

  constructor(private http:HttpClient) { }

  getDemandes() {
    return this.http.get<any[]>(this.ApiUrl)
  }
  closeDemandeById(id:number) {
    return this.http.put<any>("http://localhost:3000/updateDemande/"+id,{});
  }
  openDemandeById(id:number) {
    return this.http.put<any>("http://localhost:3000/openDemande/"+id,{});
  }
  test(){
    return this.http.get("https://myleprismews.herokuapp.com/try", {responseType: 'text'}); 
  }

}

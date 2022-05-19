import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  private ApiUrl = 'https://myleprismews.herokuapp.com/alldemandes'; 

  constructor(private http:HttpClient) { }

  getDemandes() {
    return this.http.get<any[]>(this.ApiUrl)
  }
  closeDemandeById(id:number) {
    return this.http.put<any>("https://myleprismews.herokuapp.com/updateDemande/"+id,{});
  }
  openDemandeById(id:number) {
    return this.http.put<any>("https://myleprismews.herokuapp.com/openDemande/"+id,{});
  }
  
}

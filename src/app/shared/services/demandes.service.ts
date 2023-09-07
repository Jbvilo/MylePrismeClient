import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemandesService {

  private apiUrl = 'https://myleprisme-ws-c4b7e0e65060.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getDemandes() {
    return this.http.get<any[]>(this.apiUrl + "alldemandes")
  }

  closeDemandeById(id: number) {
    return this.http.put<any>(this.apiUrl + "updateDemande/" + id, {});
  }

  openDemandeById(id: number) {
    return this.http.put<any>(this.apiUrl + "openDemande/" + id, {});
  }

  savepictures(file: File, id: string) {
    const formData = new FormData();
    formData.append("thumbnail", file, "picture1.png");
    return this.http.post<any>("http://localhost:3000/upload/", formData, {});
  }
  updateDemande(demande:any){
    return this.http.put(this.apiUrl+ "updateDemande/" + demande,{});
  }

}

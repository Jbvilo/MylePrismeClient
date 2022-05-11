import { Component, OnInit } from '@angular/core';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  dataSource: any=[];
  popupVisible!:boolean;
  demandeInfos:any;
  popupTitle!:string;
  traitee=false;
  constructor(private demandesServices: DemandesService) {

  }
  ngOnInit(): void {
    this.getDemandes()
      }
      getDemandes(){
        this.demandesServices.getDemandes().subscribe(res => {
          console.log(res)
      this.dataSource=res.filter(e=>e.ETAT != "A TRAITER").sort((a,b)=>b.ID-a.ID);
        
      })
    
      }

  openInfo(e:any){
    this.traitee=false;
    this.demandeInfos=e.data;
    this.popupTitle=e.data.ID;
    this.popupVisible=true;
  }

  closepopup(){
    this.popupVisible=false;
  }
  validate(){
this.demandesServices.openDemandeById(this.demandeInfos.ID).subscribe(res=>{
  console.log(res)
  this.traitee=true;
  this.getDemandes()
  setTimeout(() => {
    this.closepopup();
  }, 600);
})

  }

}

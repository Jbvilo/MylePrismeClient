import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import 'devextreme/data/odata/store';
import dxDataGrid from 'devextreme/ui/data_grid';
import { ScreenService } from 'src/app/shared/services';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: [ './tasks.component.scss' ]
})

export class TasksComponent implements OnInit {
  dataSource!: any[];
  popupVisible!:boolean;
  demandeInfos:any;
  popupTitle!:string;
  traitee=false;
  columns=['ID','NOM','PRENOM','TELEPHONE', 'EMAIL','DATE_ARRIVEE','ETAT'];
  popup = {height:500,width:900}
  mobileScreen!:boolean;

  @ViewChild(DxDataGridComponent) datagrid! :DxDataGridComponent;
  constructor(private demandesServices: DemandesService, private screenService:ScreenService) {
   this.mobileScreen = this.screenService.sizes['screen-x-small']
   if(this.mobileScreen){
     this.columns = ['ID','NOM','PRENOM','DATE_ARRIVEE']
     this.popup = {height:600,width:380}
   }
  }

  ngOnInit(): void {
this.getDemandes()
  }
  getDemandes(){
    this.demandesServices.getDemandes().subscribe(res => {
  this.dataSource=res.filter(e=>e.ETAT == "A TRAITER").sort((a,b)=>b.ID-a.ID);
    
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
this.demandesServices.closeDemandeById(this.demandeInfos.ID).subscribe(res=>{

  this.traitee=true;
  this.getDemandes()
  setTimeout(() => {
    this.closepopup();
  }, 600);
})

  }
}
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import 'devextreme/data/odata/store';
import dxDataGrid from 'devextreme/ui/data_grid';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: [ './tasks.component.scss' ]
})

export class TasksComponent implements OnInit {
  dataSource: any=[];
  popupVisible!:boolean;
  demandeInfos:any;
  popupTitle!:string;
  traitee=false;
  @ViewChild(DxDataGridComponent) datagrid! :DxDataGridComponent;
  constructor(private demandesServices: DemandesService) {

  }

  ngOnInit(): void {
this.getDemandes()
this.demandesServices.test().subscribe(res=>{
  console.log(res)
})
  }
  getDemandes(){
    this.demandesServices.getDemandes().subscribe(res => {
   //   console.log(res)
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
console.log(this.datagrid)
this.demandesServices.closeDemandeById(this.demandeInfos.ID).subscribe(res=>{
  console.log(res)
  this.traitee=true;
  this.getDemandes()
  setTimeout(() => {
    this.closepopup();
  }, 600);
})

  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { ScreenService } from 'src/app/shared/services';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  dataSource!: any[];
  columns = ['ID', 'NOM', 'PRENOM', 'TELEPHONE', 'EMAIL', 'DATE_ARRIVEE', 'ETAT'];
  mobileScreen!: boolean;
  searchText = "";
  @ViewChild(DxDataGridComponent) datagrid!: DxDataGridComponent;
  total!: number;
 

  constructor(private demandesServices: DemandesService, private screenService: ScreenService,private router:Router) {
    this.isMobileScreen()
  }

  ngOnInit(): void {
    this.getDemandes()
  }

  getDemandes() {
    this.demandesServices.getDemandes().subscribe(res => {
      this.dataSource = res.filter(e => e.ETAT != "A TRAITER").sort((a, b) => b.ID - a.ID);
      this.total = this.dataSource.length
    })
  }

  filterdatagrid(event: any) {
    this.searchText = event.value
    setTimeout(() => {
      this.total = this.datagrid.instance.totalCount()
    }, 150);
  }
  
  isMobileScreen() {
    this.mobileScreen = this.screenService.sizes['screen-x-small']
    if (this.mobileScreen) {
      this.columns = ['ID', 'NOM', 'PRENOM', 'DATE_ARRIVEE']
    }
  }

  openInfo(e: any) {
    this.router.navigate(['demande'], { queryParams: { id: e.data.ID } })
  }
}

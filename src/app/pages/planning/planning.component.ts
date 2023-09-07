import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DemandesService } from 'src/app/shared/services/demandes.service';
import { Appointment, SchedulerService } from 'src/app/shared/services/scheduler.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  allDemandes!:any;
  dates = new Set<any>();
  stats:any[] = [];
  visualRange:any = [];
  scrollbar=false;

  constructor( private demandesServices:DemandesService) {
    this.demandesServices.getDemandes().subscribe(res=>{
      if(res){
        this.allDemandes = res;
this.allDemandes.forEach((e:any) => {
    this.dates.add(e.DATE_ARRIVEE)
});
    this.dates.forEach(e=>{
      let value=0;
      this.allDemandes.forEach((elem:any)=>{
        if(elem.DATE_ARRIVEE == e){
          value= value + 1;
        }
      })
      this.stats.push({'date':e,'value':value})
    })

    if(this.stats) 
    {
      this.scrollbar =true;
      this.visualRange = ['11/07/2023',this.stats[this.stats.length - 1].DATE_ARRIVEE]
    
    }
      }
    })
  }
 
  customizeTooltip = (info: any) => ({
    html: info.value != '1' ? info.value + ' demandes': info.value + ' demande'
  });

  ngOnInit(): void {

  }
}



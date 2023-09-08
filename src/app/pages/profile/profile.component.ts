import { Component } from '@angular/core';
import { SchedulerService } from 'src/app/shared/services/scheduler.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  currentDate: Date = new Date();
  appointments: Appointment[] = [];
  loading!: boolean;

  constructor( private schedulerService:SchedulerService) {
    this.schedulerService.getPlanning().subscribe(res=>{
      if(res){
        (res as any[]).forEach(e=>{
          this.appointments.push({text:e.text,startDate:new Date(e.startdate),endDate:new Date(e.endDate),allDay:e.allday == 'true' ? true:false,description:e.description})
        })
      }
    })
   }

  updateRdv(event: any){
  //  this.loading = true
    this.appointments.forEach((e)=>{
      if(!e.description){
        e.description = ''
      }
    })
    this.schedulerService.postPlanning(this.appointments).subscribe(res=>{
     //this.loading = false;

    })
  }
  
}

export class Appointment {
  text!: string;
  startDate!: Date;
  endDate!: Date;
  allDay?: boolean;
  description!:string;
}
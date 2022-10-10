import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AppComponent } from 'src/app/app.component';
import { Appointment, SchedulerService } from 'src/app/shared/services/scheduler.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {


  ngOnInit(): void {
  }
  appointmentsData: Appointment[];

  currentDate: Date = new Date(2021, 2, 28);

  constructor(service: SchedulerService) {
    this.appointmentsData = service.getAppointments();
  }
}



import { Component, OnInit } from '@angular/core';
import { Appointment, SchedulerService } from 'src/app/shared/services/scheduler.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2022, 12, 8);

  constructor(service: SchedulerService) {
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit(): void {}
}



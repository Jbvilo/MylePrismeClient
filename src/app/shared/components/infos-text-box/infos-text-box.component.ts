import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-infos-text-box',
  templateUrl: './infos-text-box.component.html',
  styleUrls: ['./infos-text-box.component.scss']
})
export class InfosTextBoxComponent implements OnInit {
  @Input() info!: any;
  @Input() intitule!: string;
  @Input() modification!: boolean;
  @Output() valueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}

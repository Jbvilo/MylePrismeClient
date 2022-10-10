import { Component, OnInit } from '@angular/core';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  nbrDemande!: number;
  constructor(private demandeServices: DemandesService) {
    this.getNbrDemandes()
  }
  ngOnInit(): void {}

  getNbrDemandes() {
    this.demandeServices.getDemandes().subscribe(res => {
      this.nbrDemande = res.filter(e => e.ETAT == "A TRAITER").length
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/shared/services';
import { DemandesService } from 'src/app/shared/services/demandes.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  nbrDemande!: number;
  types: string[] = ['line', 'stackedline', 'fullstackedline'];
  datasource = [{
    day: 'Lundi',
    oranges: 3,
  }, {
    day: 'Mardi',
    oranges: 2,
  }, {
    day: 'Mercredi',
    oranges: 3,
  }, {
    day: 'Jeudi',
    oranges: 4,
  }, {
    day: 'Vendredi',
    oranges: 6,
  }, {
    day: 'Samedi',
    oranges: 11,
  }, {
    day: 'Dimanche',
    oranges: 4,
  }]

  energySources = [
  { value: 'hydro', name: 'Hydro-electric' },
  { value: 'oil', name: 'Oil' },
  { value: 'gas', name: 'Natural gas' },
  { value: 'coal', name: 'Coal' },
  { value: 'nuclear', name: 'Nuclear' },
];

 countriesInfo = [{
  country: 'Lundi',
  hydro: 13
}, {
  country: 'Mardi',
  hydro: 12
}, {
  country: 'Mercredi',
  hydro: 15
}, {
  country: 'Jeudi',
  hydro: 18
}, {
  country: 'Vendredi',
  hydro: 9
}, {
  country: 'Samedi',
  hydro: 2
}, {
  country: 'Dimanche',
  hydro: 3
}];

  constructor(private demandeServices: DemandesService, private screenService:ScreenService) {
    this.getNbrDemandes()
  }
  ngOnInit(): void {}

  getNbrDemandes() {
    this.demandeServices.getDemandes().subscribe(res => {
      this.nbrDemande = res.filter(e => e.ETAT == "A TRAITER").length
    })
  }

  adaptTitle() {

    if (this.screenService.sizes['screen-x-small']) {
      return 'titre grey-title mobiletitle'
    }
    return 'titre grey-title"';

  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenService } from 'src/app/shared/services';
import { DemandesService } from 'src/app/shared/services/demandes.service';
import { ExcellService } from 'src/app/shared/services/excell.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  demande!: any;
  imagesSrc: string[] = [];
  historique: boolean = false;
  loadingForState!: boolean;
  endState: boolean = false;
  modification:boolean = false;
  popupVisible:boolean=false;
  ismobile:boolean=false;
  savedDemande: any;

  constructor(private screenService:ScreenService,private router: Router, private route: ActivatedRoute, private demandesService: DemandesService, private excelService: ExcellService) {
    this.getInfos()
   this.ismobile= this.screenService.sizes['screen-x-small']
  }

  ngOnInit(): void { }

  editInfos(){
    this.modification=true;
  }
  getInfos() {
    this.route.queryParams.subscribe(params => {
      this.demandesService.getDemandes().subscribe(demandes => {
        this.demande = demandes.filter(element => element.ID == params['id'])[0]
        this.savedDemande = JSON.parse(JSON.stringify(this.demande));
        this.isHistorique()
      })
    })
  }
  saveInfos(){
    this.loadingForState = true;
    this.demandesService.updateDemande(this.demande).subscribe((res)=>{
      if(res){
        this.loadingForState=false;
        this.modification=false;
      }
    })
  }
  savefile() {
    this.excelService.savefile(this.demande)
  }

  isHistorique() {
    if (this.demande.ETAT == "TRAITEE") {
      this.historique = true;
    }
  }
  openMailSender(){
    this.popupVisible = true;
  }
  changeDemandeState() {
    if (!this.historique) {
      this.loadingForState = true;
      this.demandesService.closeDemandeById(this.demande.ID).subscribe(res => {
        setTimeout(() => {
          this.endState = true;
          setTimeout(() => {
            this.router.navigate(['/tasks'])
          }, 1000);
        }, 1000);
      })
    }
    else {
      this.loadingForState = true;
      this.demandesService.openDemandeById(this.demande.ID).subscribe(res => {
        setTimeout(() => {
          this.endState = true;
          this.router.navigate(['/historique'])
        }, 500);
      })
    }
  }

  return() {
    if (!this.historique) {
      this.router.navigate(['tasks'])
    }
    else {
      this.router.navigate(['historique'])
    }
  }

  savepictureSrc(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (_event) => {
      if (reader.result?.toString()) {
        this.imagesSrc.push(reader.result?.toString());
      }
    }
  }
  return_modif(){
    this.modification=false;
    this.demande = JSON.parse(JSON.stringify(this.savedDemande))
  }
}

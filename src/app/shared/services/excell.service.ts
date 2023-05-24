import { Injectable } from '@angular/core';
import * as fs from 'file-saver';
import { Workbook } from 'exceljs';

@Injectable({
  providedIn: 'root'
})
export class ExcellService {

  constructor() {

  }

  savefile(demandeInfos: any) {
    let filename = "Demande N°" + demandeInfos.ID + " - " + demandeInfos.NOM + " " + demandeInfos.PRENOM
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(filename);
  
    let header = [
      "ID",
      "NOM",
      "PRENOM",
      "DATE_DE_NAISSANCE",
      "TELEPHONE",
      "EMAIL",
      "ADRESSE",
      "HABITE_DANS_LOGEMENT",
      "HABITE_SEUL",
      "AVEC_CONJOINT",
      "ADULTES_A_CHARGE",
      "MINEURS_A_CHARGE",
      "STATUS",
      "REVENU_FISCAL",
      "PART",
      "SALAIRE",
      "EMPLOYEUR",
      "CHOMMAGE",
      "RETRAITE",
      "ORGANISME_RETRAITE",
      "RETRAITE_COMPLEMENTAIRE",
      "ORGANISME_RETRAITE_COMPLEMENTAIRE",
      "PENSION",
      "ORGANISME_PENSION",
      "ALLOCATION_AAH",
      "AUTRE_REMUNERATION",
      "NOM_AUTRE_REMUNERATION",
      "RSA",
      "TRAVAUX_A_FAIRE",
      "DESCRIPTION_PROJET",
      "APRES_TRAVAUX",
      "AIDES_TRAVAUX_ANTERIEURS",
      "ORGANISME_AIDE",
      "ANNEE_AIDE",
      "MONTANT_AIDE",
      "COMMENTAIRE",
      "DATE_ARRIVEE",
      "ETAT"
    ]
    let values  = [
      demandeInfos.ID ,
      demandeInfos.NOM ,
      demandeInfos.PRENOM,
      demandeInfos.DATE_DE_NAISSANCE,
      demandeInfos.TELEPHONE,
      demandeInfos.EMAIL,
      demandeInfos.ADRESSE,
      demandeInfos.HABITE_DANS_LOGEMENT ,
      demandeInfos.HABITE_SEUL ,
      demandeInfos.AVEC_CONJOINT ,
      demandeInfos.ADULTES_A_CHARGE ,
      demandeInfos.MINEURS_A_CHARGE ,
      demandeInfos.STATUS ,
      demandeInfos.REVENU_FISCAL ,
      demandeInfos.PART ,
      demandeInfos.SALAIRE ,
      demandeInfos.EMPLOYEUR ,
      demandeInfos.CHOMMAGE ,
      demandeInfos.RETRAITE ,
      demandeInfos.ORGANISME_RETRAITE ,
      demandeInfos.RETRAITE_COMPLEMENTAIRE ,
      demandeInfos.ORGANISME_RETRAITE_COMPLEMENTAIRE ,
      demandeInfos.PENSION,
      demandeInfos.ORGANISME_PENSION ,
      demandeInfos.ALLOCATION_AAH ,
      demandeInfos.AUTRE_REMUNERATION ,
      demandeInfos.NOM_AUTRE_REMUNERATION,
     demandeInfos.RSA ,
      demandeInfos.TRAVAUX_A_FAIRE,
      demandeInfos.DESCRIPTION_PROJET ,
      demandeInfos.APRES_TRAVAUX ,
      demandeInfos.AIDES_TRAVAUX_ANTERIEURS ,
     demandeInfos.ORGANISME_AIDE ,
     demandeInfos.ANNEE_AIDE ,
     demandeInfos.MONTANT_AIDE ,
     demandeInfos.COMMENTAIRE ,
     demandeInfos.DATE_ARRIVEE ,
     demandeInfos.ETAT,  
  ]



    worksheet.properties.defaultRowHeight = 15;
    worksheet.properties.defaultColWidth = 60;
    let i = 0;
header.forEach(element=>{
  worksheet.addRow([element,values[i]])
   i++;
})

    // worksheet.addRow(header);
    // worksheet.addRow(values);
  


    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, filename + '.xlsx');
    });
  }
}

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
  
    let header = ["ADRESSE",
      "ADULTES_A_CHARGE",
      "AIDES_TRAVAUX_ANTERIEURS",
      "ALLOCATION_AAH",
      "ANNEE_AIDE",
      "APRES_TRAVAUX",
      "AUTRE_REMUNERATION",
      "AVEC_CONJOINT",
      "CHOMMAGE",
      "COMMENTAIRE",
      "DATE_ARRIVEE",
      "DATE_DE_NAISSANCE",
      "DESCRIPTION_PROJET",
      "EMAIL",
      "EMPLOYEUR",
      "ETAT",
      "HABITE_DANS_LOGEMENT",
      "HABITE_SEUL",
      "ID",
      "MINEURS_A_CHARGE",
      "MONTANT_AIDE",
      "NOM",
      "NOM_AUTRE_REMUNERATION",
      "ORGANISME_AIDE",
      "ORGANISME_PENSION",
      "ORGANISME_RETRAITE",
      "ORGANISME_RETRAITE_COMPLEMENTAIRE",
      "PART",
      "PENSION",
      "PRENOM",
      "RETRAITE",
      "RETRAITE_COMPLEMENTAIRE",
      "REVENU_FISCAL",
      "RSA",
      "SALAIRE",
      "STATUS",
      "TELEPHONE",
      "TRAVAUX_A_FAIRE",
    ]
    let values  = [demandeInfos.ADRESSE,
     demandeInfos.ADULTES_A_CHARGE ,
     demandeInfos.AIDES_TRAVAUX_ANTERIEURS ,
     demandeInfos.ALLOCATION_AAH ,
     demandeInfos.ANNEE_AIDE ,
     demandeInfos.APRES_TRAVAUX ,
     demandeInfos.AUTRE_REMUNERATION ,
     demandeInfos.AVEC_CONJOINT ,
     demandeInfos.CHOMMAGE ,
     demandeInfos.COMMENTAIRE ,
     demandeInfos.DATE_ARRIVEE ,
     demandeInfos.DATE_DE_NAISSANCE ,
     demandeInfos.DESCRIPTION_PROJET ,
     demandeInfos.EMAIL ,
     demandeInfos.EMPLOYEUR ,
     demandeInfos.ETAT ,
     demandeInfos.HABITE_DANS_LOGEMENT ,
     demandeInfos.HABITE_SEUL ,
     demandeInfos.ID ,
     demandeInfos.MINEURS_A_CHARGE ,
     demandeInfos.MONTANT_AIDE ,
     demandeInfos.NOM ,
     demandeInfos.NOM_AUTRE_REMUNERATION ,
     demandeInfos.ORGANISME_AIDE ,
     demandeInfos.ORGANISME_PENSION ,
     demandeInfos.ORGANISME_RETRAITE ,
     demandeInfos.ORGANISME_RETRAITE_COMPLEMENTAIRE ,
     demandeInfos.PART ,
     demandeInfos.PENSION ,
     demandeInfos.PRENOM ,
     demandeInfos.RETRAITE ,
     demandeInfos.RETRAITE_COMPLEMENTAIRE ,
     demandeInfos.REVENU_FISCAL ,
     demandeInfos.RSA ,
     demandeInfos.SALAIRE ,
     demandeInfos.STATUS ,
     demandeInfos.TELEPHONE ,
     demandeInfos.TRAVAUX_A_FAIRE,
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

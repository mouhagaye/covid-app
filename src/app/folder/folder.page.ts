import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  data: any;
  public statistiques: any;

  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient) {
    this.data = this.httpClient.get('https://api.thevirustracker.com/free-api?countryTotal=SN');
    this.data
      .subscribe(data => {
        console.log('my data: ', data);
        this.statistiques = [
          {
            title: 'Nombre Total de Cas',
            data: data.countrydata[0].total_cases,
            color: "--ion-color-dark"
          },
          {
            title: 'Nombre de Cas en Traitement',
            data: data.countrydata[0].total_active_cases,
            color: "--ion-color-primary"
          },
          {
            title: 'Nombre de cas en dangers',
            data: data.countrydata[0].total_danger_rank,
            color: "--ion-color-warning"
          },
          {
            title: 'Nouveau Cas Aujourd\'hui',
            data: data.countrydata[0].total_new_cases_today,
            color: "--ion-color-secondary"
          }
          ,
          {
            title: 'Nombre de deces',
            data: data.countrydata[0].total_deaths,
            color: "--ion-color-danger"
          }
          ,
          {
            title: 'Nombre de deces Aujourd\'hui',
            data: data.countrydata[0].total_new_deaths_today,
            color: "--ion-color-danger"
          }
          ,
          {
            title: 'Nombre total de gueris',
            data: data.countrydata[0].total_recovered,
            color: "--ion-color-success"
          }
          ,
          {
            title: 'Nombre de cas grave',
            data: data.countrydata[0].total_serious_cases,
            color: "--ion-color-warning"
          }
        ];
      });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

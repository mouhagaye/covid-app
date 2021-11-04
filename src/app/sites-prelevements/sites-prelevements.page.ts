import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';

@Component({
  selector: 'app-sites-prelevements',
  templateUrl: './sites-prelevements.page.html',
  styleUrls: ['./sites-prelevements.page.scss'],
})
export class SitesPrelevementsPage implements OnInit {

  sites: Array<any>;

  constructor(private listeService: SitesService) { }

  ngOnInit() {
     this.listeService.getSites().subscribe(data => {
      this.sites = data;
     });
  }

}

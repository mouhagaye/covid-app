import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../../shared/site';

@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.page.html',
  styleUrls: ['./site-view.page.scss'],
})
export class SiteViewPage implements OnInit {

  errorMessage = '';
  site: Site;
  constructor(private route: ActivatedRoute,
              private sitesService: SitesService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSiteInfos(id);
    }
  }

  getSiteInfos(id: number): void {
    this.sitesService.getSite(id).subscribe({
      next: data => this.site = data,
      error: err => this.errorMessage = err
    });
  }
}

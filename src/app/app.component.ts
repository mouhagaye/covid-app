import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Statistiques',
      url: 'statistiques',
      icon: 'analytics'
    },
    {
      title: 'Centres de prélèvement',
      url: '/sites-prelevements',
      icon: 'home'
    },
    {
      title: 'Hôpitaux',
      url: '/hospitals',
      icon: 'medkit'
    },
    {
      title: 'Symptômes',
      url: 'symptomes',
      icon: 'thermometer'
    },
    {
      title: 'Diagnostique',
      url: '/test-covid',
      icon: 'water'
    },
    {
      title: 'Carte Covid du Sénégal',
      url: '/map-world',
      icon: 'map'
    },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

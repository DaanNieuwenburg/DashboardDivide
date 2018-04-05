import { Component } from '@angular/core';

import { WebsitePage } from '../website/website';
import { OverviewPage } from '../overview/overview';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WebsitePage;
  tab3Root = OverviewPage;

  constructor() {

  }
}

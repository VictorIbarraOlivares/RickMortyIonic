import { Component } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Episodes:any = [];
  constructor(
    private EpiService: EpisodesService
  ) {}

  ngOnInit(): void {
    this.getEpisiodes();
  }

  getEpisiodes() {
    this.EpiService.getEpisodes().subscribe(episodes => {
      this.Episodes = episodes;
      console.log(episodes);
    });
  }
}

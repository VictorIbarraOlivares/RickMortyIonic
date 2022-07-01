import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  Episode:any = [];
  constructor(
    private epiService: EpisodesService,
    private routeActive: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.epiService.getEpisode(id).subscribe(epi => {
      this.Episode = epi;
    });

  }
}

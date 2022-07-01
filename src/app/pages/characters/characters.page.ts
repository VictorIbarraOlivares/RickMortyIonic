import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(
    private routeActive: ActivatedRoute,
    private characterService: CharactersService
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.characterService.getCharacter(id).subscribe(char => {
      console.log(char);
    });
  }

}

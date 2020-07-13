import {Component, OnInit} from '@angular/core';
import {AnnonceDataService} from '../service/data/annonce-data.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AnnonceModel} from '../model.ts/annonce-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: AnnonceModel[];
  filters = {
    keyword: '',
    status: '',
    type: '',
    city: '',
    surface: '',
    pieces: 20,
    budget_min: 1,
    budget_max: 99999999999999

  };
  cities: string[];

  constructor(private annonceData: AnnonceDataService, private router: Router) {
    this.cities = annonceData.cities;
    let k = this.router.getCurrentNavigation().extras.state;
    this.filters.keyword = k != undefined ? k.keyword : '';
    // console.log(this.router.getCurrentNavigation().extras.state.keyword); // should log out 'bar'

  }


  ngOnInit(): void {
    this.getAnnoncesByFilters();
  }

  getAnnonces() {
    this.annonceData.getAnnonces().subscribe(data => {
      this.annonces = data['1'];
    });
  }

  selectChangeHandler(status, event) {
    console.log(event.target.value);
  }

  getAnnoncesByFilters() {
    this.annonceData.getAnnoncesByFilters(this.filters).subscribe(data => {
      console.log(data);
      this.annonces = data['1'];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ALL_CONTINENTS } from '../graphql';
import { Continent } from '../types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continents: Continent[] = [];
  loading: boolean = true;

  constructor(private apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute) { }

  /**
   * Angular Lifecycle hooks
   */
  ngOnInit() {

    this.apollo.watchQuery({
      query: ALL_CONTINENTS,
    }).valueChanges.subscribe(
      (response) => {
        this.continents = response.data["continents"];
        this.loading = response.loading;
      }
    )
  }

  /**
   * UI Events
   */
  onContinentSelected(code) {
    this.router.navigate([code], { relativeTo: this.route })
  }


}

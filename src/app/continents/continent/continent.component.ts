import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CONTINENT_DETAILS } from 'src/app/graphql';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent, Language } from 'src/app/types';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit, OnDestroy {

  currContinentCode: string;
  currContinentDetails: Continent
  loading: boolean = true;

  detailsSubscription: Subscription;

  constructor(private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router) { }

  /**
   * Angular Lifecycle hooks
   */
  ngOnInit() {
    this.currContinentCode = this.route.snapshot.params["code"];
    this.detailsSubscription = this.apollo.watchQuery({
      query: CONTINENT_DETAILS,
      variables: {
        code: this.currContinentCode
      }
    }).valueChanges.subscribe(
      (response) => {
        this.currContinentDetails = response.data["continent"];
        this.loading = response.loading;
      }
    );
  }

  ngOnDestroy() {
    console.log("Destroying...")
    this.detailsSubscription.unsubscribe()
  }

  /**
   * UI Events
   */
  goBack() {
    this.router.navigate(['/continents']);
  }

  getLanguages(languages: Language[]) {
    return languages.map(lang => {
      return lang.name + "(" + lang.code + ")";
    }).join(", ");
  }

}

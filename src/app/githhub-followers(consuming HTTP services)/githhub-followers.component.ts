import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithhubFollowersService } from './../services/githhub-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githhub-followers',
  templateUrl: './githhub-followers.component.html',
  styleUrls: ['./githhub-followers.component.css'],
})
export class GithhubFollowersComponent implements OnInit {
  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithhubFollowersService
  ) {}

  ngOnInit(): void {
    /* combineLatest combines 2 observables into single observable
     ** then you subcribe it, and extract parameters from combined
     ** observable.
     */
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        const id = combined[0].get('id'); // this will get the "id" parameter from 1st observable i.e. paramMap
        const page = combined[1].get('page'); // this will get the "page" parameter from 2nd observable i.e. queryParamMap
        this.service
          .getAll()
          .subscribe((response) => (this.followers = response));
      }
    );

    // combineLatest([this.route.paramMap, this.route.queryParamMap])
    //   .pipe(
    //     map((combined) => {
    //       let id = combined[0].get('id');
    //       let page = combined[1].get('page');
    //       return this.service.getAll();
    //     })
    //   )
    //   .subscribe((followers) => (this.followers = followers));
  }
}

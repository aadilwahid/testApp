import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // 2 different ways to extract parameters.
    this.username = this.route.snapshot.paramMap.get('username');

    // this.route.paramMap.subscribe((params) => {
    //   this.username = params.get('username');
    //   console.log(this.username);
    // });
  }

  submit() {
    this.router.navigate(['/followers', { page: 1, order: 'newest' }]);
  }
}

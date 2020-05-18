import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>_{
    //   });
    // );
    const id: Observable<string> = route.params.pipe(map((params: ParamMap) => params.get('id')));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    console.log("id === ", id, ", url === ", url);
  }

  ngOnInit(): void {
  }

}

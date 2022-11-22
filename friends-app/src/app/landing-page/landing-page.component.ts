import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectFriendsList} from "../+state/app.selector";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit, OnDestroy{
  friends: any = [];
  ngUnsubscribe: Subject<any> = new Subject();
  constructor (private store$: Store) {}

  ngOnInit(): void {
      this.store$.pipe(select(selectFriendsList), takeUntil(this.ngUnsubscribe))
        .subscribe({next: (friends) => {
          this.friends = friends;
        }})
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next({});
    this.ngUnsubscribe.complete();
  }
}

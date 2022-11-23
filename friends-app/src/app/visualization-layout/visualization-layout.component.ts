import {Component, ViewEncapsulation} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectFriendsList} from "../+state/app.selector";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-visualization-layout',
  templateUrl: './visualization-layout.component.html',
  styleUrls: ['./visualization-layout.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class VisualizationLayoutComponent {
  friends: any = [];
  ngUnsubscribe: Subject<any> = new Subject();
  yValue: string = 'age';
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

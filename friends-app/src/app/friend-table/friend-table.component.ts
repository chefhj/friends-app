import {Component, Input,} from '@angular/core';
import {Friend} from "../interaces/friend";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
@Component({
  selector: 'app-friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.scss']
})
export class FriendTableComponent {
  @Input() set data(data: any) {
    if (data) {
      this.dataSource = new MatTableDataSource<Friend>(data);
    }
  };
  displayedColumns: string[] = ['select', 'name', 'weight', 'age', 'friends'];
  dataSource = new MatTableDataSource<Friend>([]);
  selection = new SelectionModel<Friend>(false, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

import {Component, Inject, Input,} from '@angular/core';
import {Friend} from "../interaces/friend";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {Store} from "@ngrx/store";
import {updateFriendList} from "../+state/app.actions";
import {EditFormComponent} from "../edit-form/edit-form.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.scss']
})
export class FriendTableComponent {
  @Input() set dataSet(data: any) {
    if (data) {
      this.dataSource = new MatTableDataSource<Friend>(data);
      this.dataInput = data;
    }
  };
  dataInput: Friend[];
  displayedColumns: string[] = ['select', 'name', 'weight', 'age', 'friends'];
  dataSource = new MatTableDataSource<Friend>([]);
  selection = new SelectionModel<Friend>(false, []);
  constructor (private store: Store,
               private dialog: MatDialog,
          ){ }
  deleteFriend() {
    if (this.selection.selected?.[0]) {
      const index = this.dataInput.indexOf(this.selection.selected[0]);
      const tempData = [...this.dataInput];
      tempData.splice(index, 1);
      this.dataInput = tempData;
      this.dataSource = new MatTableDataSource<Friend>(this.dataInput);
      this.selection = new SelectionModel<Friend>(false, []);
      this.store.dispatch(updateFriendList({payload: this.dataInput}));
    }

  }
  editFriend() {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '450px',
      height: '400px',
      data: {selectedFriend: this.selection.selected[0], friends: this.dataInput}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

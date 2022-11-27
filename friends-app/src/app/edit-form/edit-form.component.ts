import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Friend} from "../interfaces/friend";
import { updateFriendList} from "../+state/app.actions";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  friends: Friend[];
  selectedFriend: Friend;
  startDate = new Date(1990, 0, 1);
  friendForm: FormGroup | any = {};
  nameFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(3), Validators.pattern("\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")]);
  weightFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$"),]);
  ageFormControl: FormControl = new FormControl<any>('', [Validators.required],);
  friendFormControl = new FormControl([]);
  constructor(
    private fb: FormBuilder,
    private store$: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    //initialize form values with data from mat dialog
    this.selectedFriend = this.data.selectedFriend;
    const index = this.data.friends.indexOf(this.selectedFriend);
    const tempData = [...this.data.friends];
    tempData.splice(index, 1);
    this.friends = tempData;
    this.nameFormControl = new FormControl<any>(this.selectedFriend.name, [Validators.required, Validators.minLength(3), Validators.pattern("\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")]);
    this.weightFormControl = new FormControl<any>(this.selectedFriend.weight, [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$"),]);
    this.ageFormControl = new FormControl<any>(this.selectedFriend.dob, [Validators.required],);
    this.friendFormControl = new FormControl<any>(this.selectedFriend.friends, []);
    this.friendForm = this.fb.group(
      {
        nameControl: this.nameFormControl,
        ageControl: this.ageFormControl,
        weightControl: this.weightFormControl,
      }
    )
  }
  //returns a Friend object based on the form controls
  createFriend() {
    const newFriend: Friend = {
      name: this.nameFormControl.value,
      age: new Date(Date.now()).getFullYear() - this.ageFormControl.value?.getFullYear(),
      dob: this.ageFormControl.value,
      weight: this.weightFormControl.value,
      friends: this.friendFormControl.value,
    };
    return newFriend;
  }

  //clears input form
  clearForm() {
    this.nameFormControl.reset();
    this.ageFormControl.reset();
    this.weightFormControl.reset();
    this.friendFormControl.reset();
  }

  //saves edited friend in the store in place of the old entry
  saveChanges() {
    const newFriend = this.createFriend();
    const temp = [...this.data.friends];
    const index = temp.indexOf(this.selectedFriend);
    temp.splice(index, 1, newFriend);
    this.friends  = temp;
    this.store$.dispatch(updateFriendList({payload: this.friends}));
    this.clearForm();
  }
}

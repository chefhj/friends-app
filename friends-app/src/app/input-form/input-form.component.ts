import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../interfaces/friend";
import {Store} from "@ngrx/store";
import {addFriend} from "../+state/app.actions";
import {initialFriends} from "../mockdata/initial-friends";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() friends: Friend[] = initialFriends;
  startDate = new Date(1990, 0, 1);
  friendForm: FormGroup | any = {};
  nameFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(3), Validators.pattern("\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")]);
  weightFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$"),]);
  ageFormControl: FormControl = new FormControl<any>('', [Validators.required],);
  friendFormControl = new FormControl([]);
  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) {
  }

  ngOnInit() {
    //init form
    this.friendForm = this.fb.group(
      {
        nameControl: this.nameFormControl,
        ageControl: this.ageFormControl,
        weightControl: this.weightFormControl,
      }
    )
  }

  // returns new Friend object based on input form
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
  //clears form control values
  clearForm() {
    this.nameFormControl.reset();
    this.ageFormControl.reset();
    this.weightFormControl.reset();
    this.friendFormControl.reset();
  }

  //adds friend to list of friends in store
  addFriend() {
    const newFriend = this.createFriend();
    this.store$.dispatch(addFriend({payload: newFriend}));
    this.clearForm();
  }
}

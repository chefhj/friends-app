import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationError} from "json-schema";
import {Friend} from "../interaces/friend";
import {Store} from "@ngrx/store";
import {addFriend} from "../+state/app.actions";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  friendForm: FormGroup | any = {};
  nameFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(3), Validators.pattern("\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")]);
  weightFormControl: FormControl = new FormControl<any>('', [Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]*$"),]);
  ageFormControl: FormControl = new FormControl<any>('', [Validators.required],);

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) {
  }

  ngOnInit() {
    this.friendForm = this.fb.group(
      {
        nameControl: this.nameFormControl,
        ageControl: this.ageFormControl,
        weightControl: this.weightFormControl,
      }
    )
  }

  addFriend() {
    const newFriend: Friend = {
      name: this.nameFormControl.value,
      age: this.ageFormControl.value,
      weight: this.weightFormControl.value,
      friends: [],
    };
    return this.store$.dispatch(addFriend({payload: newFriend}));
  }
}

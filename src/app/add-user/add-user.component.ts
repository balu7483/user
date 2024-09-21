import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  data!: FormGroup;

  constructor(private builder: FormBuilder, private service: UserService) {
    this.data = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addUser() {
    if (this.data.valid) {
      const userData: User = this.data.value;
      this.service.addUser(userData).subscribe(response => {
        console.log("User added successfully", response);
        // Reset the form after adding the user
        this.data.reset();
      });
    } else {
      console.log("Form is invalid. Please check your inputs.");
    }
  }
}
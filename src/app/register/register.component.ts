import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert: boolean = false;

  register = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
  })
  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
  }

  collection() {
    this.restoService.registerUser(this.register.value)
      .subscribe((res) => {

        this.alert = true;
        this.register.reset({});
      })
  }

  closeAlert() {
    this.alert = false;
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert: boolean = false;

  editResto = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private restoServe: RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.restoServe.getCurrentResto(this.router.snapshot.params['id'])
      .subscribe((res: { [key: string]: any }) => {
        this.editResto = new FormGroup({
          name : new FormControl(res['name']),
          email : new FormControl(res['email']),
          address : new FormControl(res['address']),
        })       
      })
  }

  collectEditData() { 
    this.restoServe.updateResto(this.router.snapshot.params['id'], this.editResto.value)
      .subscribe((res) => {
        
        this.alert = true;
      })
  }

  closeAlert() {
    this.alert = false;
  }
}

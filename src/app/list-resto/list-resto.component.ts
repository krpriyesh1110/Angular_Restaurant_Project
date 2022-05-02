import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  
  collection: any ={};
  
  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
    this.restoService.getList().subscribe((res) => {
      this.collection = res;
      
    })
  }

  deleteResto(item : any) {
    //this.collection.splice(item-1, 1);
    this.restoService.deleteResto(item).subscribe((result) => {
      console.log("result", result);
    })

    this.restoService.getList().subscribe((res) => {
      this.collection = res;
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flatdashboard',
  templateUrl: './flatdashboard.component.html',
  styleUrls: ['./flatdashboard.component.scss']
})
export class FlatdashboardComponent implements OnInit {

  constructor(private dataService:DataService) { 
    
  }
  flatsData : any = [];

  ngOnInit() {
    this.getAllFlats();
  }

  getAllFlats(){
    this.dataService.getAllFlats().subscribe((data) => {
      this.flatsData = data;
      console.log(this.flatsData);
    })
  }

}

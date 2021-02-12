import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  appTitle: string = "Flat Dashboard";
  currentUser:any
  constructor(private dataService : DataService, private router : Router) {

    
  
    
  }

 

  ngOnInit() {
   
    
  }
}

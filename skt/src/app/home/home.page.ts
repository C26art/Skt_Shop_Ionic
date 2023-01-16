import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../model/Login';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user = [];
  segId = "overview";

  constructor(private userService: UserService, private router:Router, private route: ActivatedRoute) {}

    ngOnInit(): void {      
  } 

  segmentChanged(ev: any) {
    this.segId = ev.detail.value;
  }

  goToEvent(){
    
  }  

  logOut(){
    this.userService.deleteUser();
    this.router.navigate(['/login'], {relativeTo: this.route});
  }

}



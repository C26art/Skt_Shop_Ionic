import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userService: UserService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  signUp(data:User): void {
    console.warn(data)
    this.userService.userSignUp(data);
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

}

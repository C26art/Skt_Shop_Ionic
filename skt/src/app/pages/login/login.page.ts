import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type: boolean = true;

  constructor(private userService: UserService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
  }

  

  goToHome() {}

  facebookLogin() {}

  instagramLogin() {}

  twitterLogin() {}

  touchLogin() {}

  faceLogin() {}

  goToRegister() {}

  openSignUp() {

  }

  login(data:Login): void {   
    console.warn(data)
    this.userService.userLogin(data);
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

}

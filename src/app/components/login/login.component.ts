import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../api/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        login: '',
        password: ''
    }

    constructor(public authService: AuthService,
                private router: Router) {
    }



  ngOnInit() {
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
 userLogged = inject(LoginService);
  user: any;

 ngOnInit(): void {
  this.user = this.userLogged.loggedInUser?.email;
 }

}

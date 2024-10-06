import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUser: any;

  constructor() { }
  /**
   * predefined set of users with different type of role
   */
  users = [
    {
      email: 'test@gmail.com',
      password: 'Abc@1232',
      role: 'admin'
    },
    {
      email: 'test1@gmail.com',
      password: 'aBc@1232',
      role: 'normal_user'
    },
    {
      email: 'test3@yahoo.in',
      password: 'aBc@1232',
      role: 'admin'
    },
    {
      email: 'test4@yahoo.in',
      password: 'aBc$1232',
      role: 'normal_user'
    },
    {
      email: 'testuser@org.com',
      password: 'aBc**1232',
      role: 'admin'
    },
  ];

  /**
   * function to set the login form user fata
   * @param userData getting from login form
   */
  setLoggedInUser(userData: any) {
    this.loggedInUser = userData;
  }

  /**
   * function to get loggedInUser for auth guard method validation
   * @returns loggedin user data
   */
  getLoggedInUser() {
    return this.loggedInUser;
  }

  /*
      function to filter the logged in user data from all the predefined set of users.
      if logged in then return valid user
      else return false & not allow user to navigate
    */
  checkLoggedInUser() {
    let loggedUser = this.getLoggedInUser();
    if (loggedUser) {
      return this.users.filter((e: any) => e.email == loggedUser.email && e.password == loggedUser.password);
    }
    return false;
  }

}

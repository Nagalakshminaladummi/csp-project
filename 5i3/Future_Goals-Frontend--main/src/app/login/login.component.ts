import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string="";
  public password: string="";
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

}

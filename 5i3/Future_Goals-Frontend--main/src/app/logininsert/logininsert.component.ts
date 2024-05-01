import { Component, OnInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { register, logincredentials } from '../register';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logininsert',
  templateUrl: './logininsert.component.html',
  styleUrls: ['./logininsert.component.css']
})
export class LogininsertComponent implements OnInit ,OnDestroy{
  constructor(private RegisterService: RegisterService, private router: Router) { }
  ngOnInit(): void {

  }
  Subscription: Subscription = new Subscription();
error=false;
  readarray = [];
  user: logincredentials = {
    mail: '',
    password: ''
  }

  Read(Form:NgForm) {
    this.Subscription = this.RegisterService.Read(this.user.mail).subscribe(
      (data: any) => {
        this.readarray = data.Result[0];
        console.log(this.readarray);
        if (data.Result[0]) {
          if (this.readarray[1] == this.user.password) {
         this.router.navigate(['/main'])
          }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
import { Component, OnInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminregService } from '../adminreg.service';
import { adminreg , logincredentials } from '../adminreg';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent  implements OnInit ,OnDestroy{
 
    constructor(private RegisterService: AdminregService, private router: Router) { }
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
           this.router.navigate(['/admin'])
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



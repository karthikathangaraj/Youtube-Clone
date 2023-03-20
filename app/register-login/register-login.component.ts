import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent {
  user1:User =new User();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user1);
    this.registerService.registerUser(this.user1).subscribe(data=>{
     alert("Successfully User is register?")
    },error=>alert("Sorry User not register"));
  }

}


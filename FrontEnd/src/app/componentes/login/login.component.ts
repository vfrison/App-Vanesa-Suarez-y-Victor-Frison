import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl,
    password: new FormControl 
  })

  constructor(
    private router :Router,
    private loginService:LoginService,

    ) { }

  ngOnInit(): void {
  }


  loginUser(){
 
    this.loginService.loginService(this.loginForm.value).subscribe((result:any)=>{
      if(result===null) {
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Usuario y/o contraseña incorrecto/s',
          showConfirmButton: true,
          timer: 6000
          
        })
      }else{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Ingreso correcto!',
            showConfirmButton: true,
            timer: 6000
            
          })
          console.log(result)
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", result.user);
          this.router.navigate(["home"])
    }

      
    })  
    

}


}

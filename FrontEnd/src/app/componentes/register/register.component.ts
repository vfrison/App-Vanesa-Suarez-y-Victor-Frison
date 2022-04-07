import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

zzzz
export class RegisterComponent implements OnInit {
  
  form = new FormGroup({
    user: new FormControl ,
    lastName: new FormControl ,
    name: new FormControl ,
    country: new FormControl ,
    state: new FormControl ,
    password: new FormControl 
  })
  
  constructor(private http:HttpClient, private formBuilder:FormBuilder){
    
  }

  ngOnInit(): void {

 
}

   addUser(){
     
      console.log(this.form.value)
      this.http.post('http://localhost:3000/api/users',this.form.value).subscribe((result)=>{
        if(result===null) {
          Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'El usuario ya existe, intenta otro!',
            showConfirmButton: true,
            timer: 6000
            
          })
        }else{
                    
          Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Usuario creado con exito!',
              showConfirmButton: true,
              timer:6000
              
            })
            this.form.reset();
      }
          
      })

  }

}

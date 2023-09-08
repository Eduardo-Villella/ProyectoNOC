import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    showRegisterForm: boolean = true;// Para ocultar formulario
    showRegisterAnswer: boolean = false; // Para mostar pagina de repuesta registeranswer
  
    userData: any = {
      username: '',
      password: '',
      apellido: '',
      nombre: '',
      email: ''
    };

  constructor() { }

  ngOnInit(): void {
  }

}

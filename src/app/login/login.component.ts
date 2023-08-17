import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() id!:number;
  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  userName!: string;
  password!: string;
  formData!: FormGroup;
  clicked:boolean=false;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }
  onClickSubmit(data: any) {
    this.clicked=true
    this.userName = data.userName;
    this.password = data.password;
    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);
    var name=data.userName;
    this.authService.login(this.userName, this.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        this.backToAgreementPage(name)
        if (data) this.router.navigate(['/dashboard']);
        this.clicked=false;
      });
  }
  backToAgreementPage(x:any) {
    this.modalSave.emit(x);
  }
}

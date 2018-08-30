import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobileService } from '../service/mobile.service';
import { Mobile } from '../mobile.model';

@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.css']
})
export class EditMobileComponent implements OnInit {

  mobile: Mobile;
  editForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private mobileService: MobileService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.mobileService.updateMobile(this.editForm.value)
    .subscribe(data=>{
      this.router.navigate(['list-mobile']);
    },
    error=>{
      alert(error);
    });
  }

}

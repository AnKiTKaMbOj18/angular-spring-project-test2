import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileService } from '../service/mobile.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private mobileService: MobileService) { }

  addForm: FormGroup;
  ngOnInit() {
  
    this.addForm=this.formBuilder.group({
      id: [],
      name:['',Validators.required],
      cost:['',Validators.required]
    });
  }

  onSubmit() {
    this.mobileService.createMobile(this.addForm.value)
    .subscribe(data=>{alert('mobile added successfully'),this.router.navigate(['list-mobile']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Mobile } from '../mobile.model';
import { MobileService } from '../service/mobile.service';

@Component({
  selector: 'app-list-mobile',
  templateUrl: './list-mobile.component.html',
  styleUrls: ['./list-mobile.component.css']
})
export class ListMobileComponent implements OnInit {

  mobiles:Mobile[];
  constructor(private router: Router,private mobileService: MobileService) { }

  ngOnInit() {
    this.mobileService.getMobiles().subscribe(data=>{
      this.mobiles=data;
    });
  }

  deleteMobile(mobile:Mobile): void {
    this.mobileService.deleteMobile(mobile.id)
    .subscribe(data=>{alert('Record deleted successfully'),
      this.mobiles=this.mobiles.filter(m=>m!=mobile);
      this.router.navigate(['list-mobile']);
    })
  };

  editMobile(mobile:Mobile): void {
    localStorage.removeItem("editMobileId");
    localStorage.setItem("editMobileId",mobile.id.toString());
    this.router.navigate(['edit-mobile']);
  };

  addMobile(): void{
    this.router.navigate(['add-mobile']);
  }

}

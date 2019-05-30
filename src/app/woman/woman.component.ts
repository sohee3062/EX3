import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkup } from '../Checkup';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
})

export class WomanComponent implements OnInit {

  checkup : Checkup[];
  cancer = new Array();
  check = new Array();
  input = new Array();
  
  tcancer : number;
  lcancer : number;
  scancer : number;
  bcancer_F : number;
  tcancer_F : number;
  cocancer_F : number;
  scancer_F : number;

  constructor(public customerService : CustomerService, private router : Router) {}

  ngOnInit() {}

  private onSubmit() {
    this.onChecked();
    this.router.navigate(['/second']);
  }

  private onChecked() {
    this.cancer = ["tcancer","lcancer","scancer","bcancer_F","tcancer_F","cocancer_F","scancer_F"];
    this.input = [this.tcancer,this.lcancer,this.scancer,this.bcancer_F,this.tcancer_F,this.cocancer_F,this.scancer_F];
    for(var i=0 ; i<this.cancer.length ; i++) {
      for(var j=0 ; j<document.getElementsByName(this.cancer[i]).length ; j++) {
        const input = document.getElementsByName(this.cancer[i])[j] as HTMLInputElement;;
        if(input.checked){
          this.check[i] = true;
          break;
        } else
           this.check[i] = false;
      }
    }

    for(var i=0 ; i<this.check.length ; i++) {
      if(!this.check[i]) {
        this.input[i] = 0;
      }
    }

    this.onInput()

  }

  private onInput() {
    this.customerService.data().tcancer = this.input[0];
    this.customerService.data().lcancer = this.input[1];
    this.customerService.data().scancer = this.input[2];
    this.customerService.data().bcancer_F = this.input[3];
    this.customerService.data().tcancer_F = this.input[4];
    this.customerService.data().cocancer_F = this.input[5];
    this.customerService.data().scancer_F = this.input[6];
  }

  private smokingCheck() {
    if(this.customerService.data().smoking == 0) {
      document.getElementById("smoke").style.display = "none";  
    }
    else {
      document.getElementById("smoke").style.display = "block"
    }     
  } 

}

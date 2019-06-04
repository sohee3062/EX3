import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styleUrls: ['./cancer.component.css']
})
export class CancerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  private onSubmit() {
    this.router.navigate(['first']);    
  }

}

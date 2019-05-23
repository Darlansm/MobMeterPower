import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, NavController } from '@ionic/angular';
import { NOMEM } from 'dns';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.page.html',
  styleUrls: ['./meter.page.scss'],
})
export class MeterPage implements OnInit {

  name : any;

  constructor(private activeRoute: ActivatedRoute ) { 
    
  }

  ngOnInit() {
   
    this.name = this.activeRoute.snapshot.paramMap.get('name');
    console.log(this.name);
   
  }

}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  providers:[ NgbCarouselConfig]
})
export class DealsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval= 2000;
    config.wrap = true;
    config.keyboard= false;
    config.pauseOnHover= false;
   }

  ngOnInit(): void {
  }

}

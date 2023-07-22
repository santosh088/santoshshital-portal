import { Component, Input, OnInit } from '@angular/core';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-diet-details',
  templateUrl: './diet-details.component.html',
  styleUrls: ['./diet-details.component.css']
})
export class DietDetailsComponent implements OnInit {

  @Input() onSelected: any;

  constructor(public _diet:DietService) { }

  ngOnInit(): void {
  }

}

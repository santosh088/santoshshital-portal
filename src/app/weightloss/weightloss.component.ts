import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-weightloss',
  templateUrl: './weightloss.component.html',
  styleUrls: ['./weightloss.component.css']
})

export class WeightlossComponent implements OnInit {

  @Output() displayMessage:any;
  @Output() onSelected = new EventEmitter<any>();

  constructor(private _diet:DietService) { 
  }

  ngOnInit(): void {
  }
  diets = [
    { name: 'MORNING DRINK' },
    { name: 'BREAKFAST' },
    {  name: 'LUNCH' },
    {  name: 'EVENING SNACKS' },
    {  name: 'DINNER' },
    {  name: 'NIGHT DRINK' }
  ];
  
  selectDiet(diet:any){
    if(diet == 'MORNING DRINK'){
      this._diet.images = "water-image";
      this._diet.waterflag = true;
      this._diet.breakfastflag = false;
      this._diet.lunchflag = false;
      this._diet.eveningflag = false;
      this._diet.dinnerflag = false;
      this._diet.nightflag = false;

    } else if(diet == 'BREAKFAST'){
      this._diet.waterflag = false;
      this._diet.breakfastflag = true;
      this._diet.lunchflag = false;
      this._diet.eveningflag = false;
      this._diet.dinnerflag = false;
      this._diet.nightflag = false;
    } else if(diet == 'LUNCH'){
      this._diet.waterflag = false;
      this._diet.breakfastflag = false;
      this._diet.lunchflag = true;
      this._diet.eveningflag = false;
      this._diet.dinnerflag = false;
      this._diet.nightflag = false;
    } else if(diet == 'EVENING SNACKS'){
      this._diet.waterflag = false;
      this._diet.breakfastflag = false;
      this._diet.lunchflag = false;
      this._diet.eveningflag = true;
      this._diet.dinnerflag = false;
      this._diet.nightflag = false;
    } else if(diet == 'DINNER'){
      this._diet.waterflag = false;
      this._diet.breakfastflag = false;
      this._diet.lunchflag = false;
      this._diet.eveningflag = false;
      this._diet.dinnerflag = true;
      this._diet.nightflag = false;
    }
   else if(diet == 'NIGHT DRINK'){
    this._diet.waterflag = false;
    this._diet.breakfastflag = false;
    this._diet.lunchflag = false;
    this._diet.eveningflag = false;
    this._diet.dinnerflag = false;
    this._diet.nightflag = true;
   }
   else {
    this._diet.waterflag = false;
    this._diet.breakfastflag = false;
    this._diet.lunchflag = false;
    this._diet.eveningflag = false;
    this._diet.dinnerflag = false;
    this._diet.nightflag = false;
   }
}

}

import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { THeros } from '../heros';
import  heros from '../../../data/heros.json'
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: `./home.component.css`,
  schemas : [NO_ERRORS_SCHEMA]
})
export class HomeComponent  implements OnInit{
  pickphase : boolean = false
  banphase : boolean = true
  blueteamturn : boolean = true
 herosList  : THeros[] = heros
 heroSelected : THeros | undefined 
 teamA : THeros[] = []
 teamB : THeros [] = []
 banA : THeros [] = []
 banB : THeros [] = []

 ngOnInit(): void {
     console.table(this.herosList);
     
 }

 selectHero(id: number) {
this.heroSelected = this.herosList.find((hero) => hero.id === id)
 }

 addBannedHero(id : number) {
  this.herosList = this.herosList.filter((hero) => hero.id !== this.heroSelected?.id)
  if(this.blueteamturn && this.heroSelected) {
    this.banA.push(this.heroSelected)
    this.heroSelected = undefined
    this.blueteamturn = false
    if (this.banA.length === 2) {
      this.banphase = false
      this.pickphase = true
    }
   
  }
  else if (!this.blueteamturn && this.heroSelected) {
    this.banB.push(this.heroSelected)
    this.heroSelected = undefined
    if(this.banB.length !== 2)
    {
      this.banphase = false
      this.pickphase = true
      this.blueteamturn = true
    }
    else {
      this.blueteamturn = true
    }
  }
 }

 addHeroToTeam( id : number) {
  this.herosList = this.herosList.filter((hero) => hero.id !== this.heroSelected?.id)
  if (this.blueteamturn && this.heroSelected) {
    this.teamA.push(this.heroSelected)
    this.heroSelected = undefined

if(this.teamA.length === 1 || this.teamA.length === 4) {
  this.blueteamturn = false
}

    if(this.teamA.length === 2) {
      this.pickphase = false
      this.banphase = true
      this.blueteamturn = false
    }

  }
  else if (!this.blueteamturn && this.heroSelected) {
    this.teamB.push(this.heroSelected)
    this.heroSelected = undefined
    console.log(this.teamB);
    
    
     if (this.teamB.length >= 2) {
      this.blueteamturn = true

     }
     
     if (this.teamB.length === 4) {
      this.pickphase = false
      this.banphase = false
      this.heroSelected = undefined
     }
  }
 }
}

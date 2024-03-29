import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { THeros } from '../heros';
import  heros from '../../../data/heros.json'
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: `./home.component.css`,
  schemas : [NO_ERRORS_SCHEMA]
})
export class HomeComponent  implements OnInit{
 herosList  : THeros[] = heros

 ngOnInit(): void {
     console.table(this.herosList);
     
 }
}

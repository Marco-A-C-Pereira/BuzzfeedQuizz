import { Component, Input, OnInit } from '@angular/core';
import { quizzInterface } from 'src/app/model/quizz';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.css']
})
export class QuizzCardComponent implements OnInit {

 @Input() quizz:quizzInterface = {} as quizzInterface

  completed:string = ""

  constructor() { }

  ngOnInit(): void {
    this.completed = localStorage.getItem(this.quizz.id.toString())! ? "star-on" : "star-off";
  }

}

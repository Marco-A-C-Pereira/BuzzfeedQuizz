import { Component, Input, OnInit } from '@angular/core';
import { quizzInterface } from 'src/app/interfaces/quizz';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.css']
})
export class QuizzCardComponent implements OnInit {

 @Input() quizz:quizzInterface = {} as quizzInterface

  constructor() { }

  ngOnInit(): void {
  }

}

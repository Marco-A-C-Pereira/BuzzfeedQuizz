import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/components/services/quizz.service';
import { questionInterface } from 'src/app/model/question.interface';
import { quizzInterface } from 'src/app/model/quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  id: any = "";
  // Any válido porque o componente só exibe o valor da rota caso um quizz com o ID exista

  quizzFull:quizzInterface = {} as quizzInterface;

  quizzQuestions:questionInterface[] = []
  questionCounter:number = 0;

  quizzAnswer:string[] = []
  quizzAnswerCount:any = {}

  finished:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private quizzService : QuizzService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.quizzFull = this.quizzService.getById(this.id);
    // console.log(this.quizzFull);

    this.quizzQuestions = this.quizzFull.questions;
    console.log(this.quizzQuestions)
  }

  optionSelected(alias:string): void{
    this.quizzAnswer.push(alias)
    this.questionCounter += 1;

    if( this.questionCounter === this.quizzQuestions.length ) {

      this.resultCalc()
      this.finished = true;
     }

  }

  resultCalc(){
    let result:string = "";
    let previous = 0

    for (const alias of this.quizzAnswer) {
      if (this.quizzAnswerCount[alias]) { this.quizzAnswerCount[alias] += 1 }
      else { this.quizzAnswerCount[alias] = 1; }
    }

    console.log(this.quizzAnswerCount)


    for (const [alias, count] of Object.entries(this.quizzAnswerCount)) {
      console.log(alias);
      console.log(count);
      if ( count > previous ) { result = alias }

    }

    console.log(`Seu resultado é: ${result}`)


  }

}

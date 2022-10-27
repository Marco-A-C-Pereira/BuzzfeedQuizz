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

  id: any = ""; // Any válido porque o componente só exibe o valor da rota caso um quizz com o ID exista

  quizzFull:quizzInterface = {} as quizzInterface;

  quizzQuestions:questionInterface[] = []
  questionCounter:number = 0;

  quizzAnswer:string[] = [];

  quizzResult:string = "";

  loading:boolean = false
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
  }

  optionSelected(alias:string): void{
    this.quizzAnswer.push(alias)
    this.questionCounter += 1;

    if( this.questionCounter === this.quizzQuestions.length ) {

    type ObjectKey = keyof typeof this.quizzFull.results;
    const resultKey = this.resultCalc(this.quizzAnswer) as ObjectKey;

      this.quizzResult = this.quizzFull.results[resultKey]
      console.log(this.quizzResult)

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.finished = true
      }, 6000);

      localStorage.setItem(this.id, "done");

     }

  }

  resultCalc(answrr:string[]):string {
    let item = answrr[0]
    let itemCount:any = {}

    for (let i in answrr) {
      const currentItem = answrr[i];

      itemCount[currentItem] ?  itemCount[currentItem]++ : itemCount[currentItem] = 1
      if (itemCount[item] < itemCount[currentItem]) item = currentItem ;
    }


    return item

  }

}

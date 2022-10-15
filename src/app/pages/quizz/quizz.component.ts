import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/components/services/quizz.service';
import { quizzInterface } from 'src/app/interfaces/quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  id: any = "";
  // Any válido porque o componente só exibe o valor da rota caso um quizz com o ID exista

  quizzFull:quizzInterface = {} as quizzInterface;

  constructor(
    private route: ActivatedRoute,
    private quizzService : QuizzService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.quizzFull = this.quizzService.getById(this.id);
    console.log(this.quizzFull);
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/components/services/quizz.service';
import { quizzInterface } from 'src/app/model/quizz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizzes:quizzInterface[] = []

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzes = this.quizzService.quizzes
  }

}

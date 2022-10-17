import { Injectable } from '@angular/core';
import { quizzInterface } from 'src/app/model/quizz';
import quizz__questions from '../../../assets/data/quizz__questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() {
    quizz__questions.quizzes.map(quizz => this.quizzes.push(quizz))
  }

  quizzes: quizzInterface[] = []

 getById(id:string):quizzInterface{

 let result = this.quizzes.find(obj => obj.id === Number(id));
 let quizzInfo:quizzInterface;

  if (result) { quizzInfo = result;}
  else {  quizzInfo = {} as quizzInterface } // Não é a melhor pratica

  return quizzInfo
 }

}

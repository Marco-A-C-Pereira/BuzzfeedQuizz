import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loadingPhrases:string[] = [
    "Estamos processando suas respostas ...",
    "Calculando suas respostas",
    "Você sabia que o vaporeon é o pokemon mais ",
    "Não lamba a tampa de margarina",
    "Morbando",
    "Isso é um teste",
  ]

  index:number = Math.floor(Math.random() * this.loadingPhrases.length);
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.randomIndex();
  }

  randomIndex() {



    this.index = Math.floor(Math.random() * this.loadingPhrases.length);
    if ( !(this.count > 3) ){
    setTimeout(() =>{

      this.randomIndex()
    }, 2000)

    ++this.count
    console.log(this.count)

  }
}


}

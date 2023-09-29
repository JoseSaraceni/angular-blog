import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoContent:string = "https://criticalhits.com.br/wp-content/uploads/2018/10/Barba_Branca_vs._Barba_Negra.png"

  titleContent:string = "Barba Negra aplica o golpe final em Barba Branca"

  descriptionContent:string = "Após sofrer diversos tiros de canhão em seu peito, Barba Branca recebe o ultimo golpe de um dos seus ex homens, Barba Negra, que participou de seu bando por 12 anos, era o membro mais antigo de sua tripulação"

  constructor() { }

  ngOnInit(): void {
  }

}


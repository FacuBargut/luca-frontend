import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../../core/services/questions/questions.service'

import {MatDialog} from '@angular/material/dialog';

import { AddQuestionComponent } from 'src/app/community/components/add-question/add-question.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private questionsService: QuestionsService) { }

  questions:any[]=[];

  ngOnInit(): void {
    this.fetchQuestions();
    console.log(this.questions);
  }

  
  clickProducto(id:number){
    console.log('product');
    console.log(id);
  }


  // Funcion que conecta al servicio que devuelve del API, pero tengo problema de CORS
  // fetchQuestions(){
  //   this.questionsService.getAllQuestions().subscribe( 
  //     questions => {
  //       this.questions = questions;
  //     }
  //   )
  // }

  fetchQuestions(){
    this.questions = [
      {
        title:'¿Cuáles son los múltiplos del 7?',
        description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e...',
        student: 'juan.c23',
        subject: 'Matematicas'
      },
      {
        title:'¿Cuáles son los múltiplos del 7?',
        description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e...',
        student: 'juan.c23',
        subject: 'Matematicas'
      },
      {
        title:'¿Cuáles son los múltiplos del 7?',
        description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e...',
        student: 'juan.c23',
        subject: 'Matematicas'
      },
      {
        title:'¿Cuáles son los múltiplos del 7?',
        description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e...',
        student: 'juan.c23',
        subject: 'Matematicas'
      },
      {
        title:'¿Cuáles son los múltiplos del 7?',
        description: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque en la última clase e...',
        student: 'juan.c23',
        subject: 'Matematicas'
      }
    ];

  }

  openDialog(){
    
    let dialogRef = this.dialog.open(AddQuestionComponent, {
      height: '700px',
      width: '100%',
    });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog result: ${result}`);
      // });
    
  }

}

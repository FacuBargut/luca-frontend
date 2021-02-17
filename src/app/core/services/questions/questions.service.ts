import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Question } from '../models/question.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  
  constructor(private http: HttpClient) { }
  
  questions:any[]=[];


  getAllQuestions(){
      return this.http.get<Question[]>(`${environment.url_api}/questions`);
  }

  createQuestion(question: Question){
    return this.http.post<Question>(`${environment.url_api}/questions/`, question)
  }



}

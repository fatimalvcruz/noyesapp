import { Component, OnInit } from '@angular/core';
import { YesnoapiService } from '../yesnoapi.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  yesnoImg: string= '';
  yesnoAnswer: string = '';
  error: boolean = false;
  pregunta: string = '';
  inputValue:string = '';
  show:boolean = false;
  displayValue:string = '';
 

  constructor ( private yesnoservices: YesnoapiService){}

  runApp(){
    this.yesnoservices.getgift().subscribe({
      next:(respuesta:any)=>{
        this.yesnoImg = respuesta.image;
        this.yesnoAnswer = respuesta.answer.toUpperCase();
        this.show = true;
        this.displayValue = this.inputValue.toUpperCase();
        this.inputValue = '';
      
      }, error:(respuesta:Response) =>{
        this.error = true;
      }
     });
   
    }
    refresh(){
      this.show =  false;
    }
   


    ngOnInit():void{


     
    }

  }


 


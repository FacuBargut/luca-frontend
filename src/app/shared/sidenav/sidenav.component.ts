import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddQuestionComponent } from 'src/app/community/components/add-question/add-question.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    
    let dialogRef = this.dialog.open(AddQuestionComponent, {
      height: '700px',
      width: '100%',
    });
    
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  questionForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public  message: string ) {
      this.buildForm();
     }

  ngOnInit(): void {


    setTimeout(() => {
      document.getElementById('input_title').focus()
    }, 300);


  }

  closeDialog(){
    this.dialogRef.close();
  }


  private buildForm(){
    this.questionForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      publication: ['',[Validators.required]],
    })
  }


  submitQuestion(e:Event){
    console.log(e);
    e.preventDefault();
    if (this.questionForm.valid) {
      const question = this.questionForm.value;
      console.log(question)
      // this.productService.createProduct(product).subscribe(
      //   newProduct => {
      //     this.router.navigate(['./admin/products'])
      //   }
      // )
    }
    // console.log(this.form.value)


  }



}

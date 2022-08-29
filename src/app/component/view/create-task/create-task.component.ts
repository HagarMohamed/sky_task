import { Component, Input, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  file = null;
  success = false;

  constructor(private service: TaskServiceService) { }


  ngOnInit(): void {}

  createTask(titleInput: NgModel, contentarea: NgModel, usernameInput: NgModel){
    this.service.createTask(titleInput.value, contentarea.value, usernameInput.value, this.file, (responce: any) =>{
      console.log(responce);

      if(responce.hasOwnProperty("success")){
        
        this.success = true;
      }

    })
  }

  

  onChange(event: any) {
    this.file = event.target.files[0];
}


}




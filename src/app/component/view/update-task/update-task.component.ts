import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  id = -1;
  title= "";
  content= "";
  success = false;

  constructor(private service: TaskServiceService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.queryParamMap.get('id') || "0");
    this.title = this.route.snapshot.queryParamMap.get('title') || "";
    this.content = this.route.snapshot.queryParamMap.get('content') || ""
    
  }

  updateTask(titleInput: NgModel, contentArea: NgModel){

    this.service.updateTask(titleInput.value, contentArea.value, this.id, (responce: any)=>{

      console.log(responce);

      if(responce.hasOwnProperty("success")){
        
        this.success = true;
      }

    })

  }

}

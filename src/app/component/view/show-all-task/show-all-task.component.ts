import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-show-all-task',
  templateUrl: './show-all-task.component.html',
  styleUrls: ['./show-all-task.component.scss'],
})
export class ShowAllTaskComponent implements OnInit {
  constructor(private service: TaskServiceService, private router: Router) {}

  tasks: any = [];
  result: any = {};
  ngOnInit(): void {
    
  }

  getSingleTask(_id: number) {
    this.router.navigate(['/showSignal'], {
      queryParams: {
        id: _id,
      },
    });
  }

  deleteTask(event: Event, _id: number) {
    event.stopPropagation();
    this.service.deleteTask(_id, (responce: any) => {
      this.result = responce;
      if (responce.hasOwnProperty('success')) {
        this.tasks = this.tasks.filter(function (ele: any) {
          return ele.id != _id;
        });
      }
    });
  }

  goUpdate(event: Event, _id: number, _title: string, _content: string){
    event.stopPropagation();
    this.router.navigate(['/updateTask'], {
      queryParams: {
        id: _id,
        title: _title,
        content: _content
      },
    });
    

  }


  getAllTasks(usernameInput: string){

    this.service.getAllTasks(usernameInput, (responce: any) => {
      console.log(responce);
      this.tasks = responce;
    });

  }
}

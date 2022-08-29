import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-show-single-task',
  templateUrl: './show-single-task.component.html',
  styleUrls: ['./show-single-task.component.scss']
})
export class ShowSingleTaskComponent implements OnInit {

  constructor(private service: TaskServiceService, private route : ActivatedRoute) { }

  single_tasks: any = {};
  ngOnInit(): void {

     let _id = parseInt(this.route.snapshot.queryParamMap.get('id') || "0");

    this.service.getSingleTasks(_id,(responce: any) => {
      console.log(responce);
      this.single_tasks = responce;
    })
  }


}

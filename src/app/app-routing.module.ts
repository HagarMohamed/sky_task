import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './component/view/create-task/create-task.component';
import { ShowAllTaskComponent } from './component/view/show-all-task/show-all-task.component';
import { ShowSingleTaskComponent } from './component/view/show-single-task/show-single-task.component';
import { UpdateTaskComponent } from './component/view/update-task/update-task.component';

const routes: Routes = [

  {path: "showAll", component: ShowAllTaskComponent},
  { path: 'showSignal', component: ShowSingleTaskComponent },
  { path: 'createTask', component: CreateTaskComponent },
  { path: 'updateTask', component: UpdateTaskComponent },

  {path: "**", redirectTo: "showAll", pathMatch: "full"},
  



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

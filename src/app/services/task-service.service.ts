import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

  tasks :any = [];

  getAllTasks(username: string, callback: any){
    let url: string = 'https://task.ecmpp.com/api/task/all/' + username;
    this.http.get(url)
    .subscribe( response => {
      callback(response)
    })
  }


  getSingleTasks(id: number, callback: any){
    let url: string = 'https://task.ecmpp.com/api/task/Show/' + id;
    this.http.get(url)
    .subscribe( response => {
      callback(response)
    })
  }

  createTask(titleInput: string, contentTextarea: string, username: string, file: File | null, callback: any){

    let url: string = 'https://task.ecmpp.com/api/task/add';
    let formData = new FormData();
    formData.append("title", titleInput);
    formData.append("username", username);
    formData.append("content", contentTextarea);
    
    if(file){

      formData.append("image", file);
    }

    this.http.post(url, formData)
    .subscribe( response => {
      console.log(response);   
      callback(response);
  })
}

updateTask(title: string, content: string, id: number, callback: any){

  let url: string = "https://task.ecmpp.com/api/task/edit"
  let formData = new FormData();
  formData.append("title", title),
  formData.append("content", content),
  formData.append("id", id.toString())

  this.http.post(url, formData).subscribe( Response => {
   callback(Response)
  }

  )
}


deleteTask(id: number, callback: any){
  let url: string = "https://task.ecmpp.com/api/task/remove"
  this.http.delete(url + "/" + id)
  .subscribe( response => {
    callback(response)
  })
}


}




  

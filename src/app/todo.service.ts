import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 export class TodoService {
 todolist:any=["Go to Gym","Go to Bed","Go to Eat"];
  constructor() { }
  public getlist( ) { return this.todolist; } 
  public setlist(todo:any ) { this.todolist.push(todo); } 
}

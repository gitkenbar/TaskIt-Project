import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}
export class UserModel {
  constructor(
    public UserImage: string, public UserName: string, public Email:string){}
}

export const JohnDoe = [
  new UserModel('default.jpg', 'John Doe', 'JohnDoe@WhoIsDoe.biz')
]

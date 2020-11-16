import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList = [
    {
      id: 1,
      name: 'Jose',
    },
    {
      id: 2,
      name: 'Pedro',
    },
    {
      id: 3,
      name: 'Laura',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent {
  friends: any =
    [{ "_id": "6386facd38e5c7f2394aa03a", "name": "Jobin", "friendName": "Vishnu", "friendNickName": "Vishnu", "DescribeYourFriend": "Best Friends", "__v": 0 }, { "_id": "63871fc6770c541e6349383b", "name": "vb", "friendNickName": "hello", "DescribeYourFriend": "hi", "__v": 0 }, { "_id": "638720e1770c541e6349384c", "name": "Alvin", "friendName": "Akshay", "friendNickName": "akku", "DescribeYourFriend": "funny", "__v": 0 }]
}

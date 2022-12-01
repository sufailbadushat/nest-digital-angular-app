import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent {

  constructor(private api: ApiService) {
    api.fetchFriends().subscribe(
      (response) => {

        this.loading=false

        this.friends = response;
      }
    )
  }
  friends: any = []

  loading: boolean = true
}

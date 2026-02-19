import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  // Sample data to display in your cards
 // Inside your PostsComponent class:

  posts = [
    { 
      id: 1, 
      title: 'Biboy', 
      description: 'taga burgos.' 
    },
    { 
      id: 2, 
      title: 'Kentong',
      description: 'way ligo' 
    },
    { 
      id: 3, 
      title: 'Sir Razo',
      description: 'pinaka gwapo.' 
    }
  ];

  // Logic to handle the delete button
  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}


import { BadInput } from './../common/bad-input';
import { NotFoundError } from 'src/app/common/not-found-error';
import { AppError } from 'src/app/common/app-errors';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css'],
})
export class PostComponentComponent implements OnInit {
  posts;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe((response) => (this.posts = response));
  }

  createPost(input: HTMLInputElement) {
    const postBody = { title: input.value };

    input.value = '';

    this.service.create(postBody).subscribe(
      (response) => {
        postBody['id'] = response['id'];
        this.posts.splice(0, 0, postBody);
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.delete(3345).subscribe(
      (response) => {
        console.log(response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      }
    );
  }
}

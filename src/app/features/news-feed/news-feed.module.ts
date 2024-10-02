import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { StoryPostComponent } from './story-post/story-post.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryPostComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }

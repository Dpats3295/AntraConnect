import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { StoryPostComponent } from './story-post/story-post.component';


const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'story-post', component: StoryPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule { }

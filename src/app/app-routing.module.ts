import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, 
  { path: 'auth', 
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) 
  },
  { path: 'admin', 
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) 
  },
  { path: 'profile', 
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) 
  },
  { path: 'news-feed', 
    loadChildren: () => import('./features/news-feed/news-feed.module').then(m => m.NewsFeedModule) 
  },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

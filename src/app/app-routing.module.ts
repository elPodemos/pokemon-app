import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { Error404Component } from './error404/error404.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: ':id', component: CardDetailComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`

})
export class ArticleComponent {


  articles: string[] = [
    "Articles 1",
    "Articles 2",
    "Articles 3",
    "Articles 4",
  ];

  afficherArticle(article: string): void{
    console.log("Vous avez selectionner cette article: "+ article);
  }

  afficherForm(form: string): void{
    console.log("Vous avez écrit ceci dans le formulaire : "+ form);
  }

}

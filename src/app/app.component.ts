import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrientExpress';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'cn']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
    
}

useLanguage(language: string): void {
  this.translate.use(language);
}

}

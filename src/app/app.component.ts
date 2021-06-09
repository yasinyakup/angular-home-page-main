import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JsonserviceService } from './service/jsonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'OrientExpress';
  constructor(private translate: TranslateService, private jsonService: JsonserviceService) {
    translate.addLangs(['en', 'cn']);
    //jsonService.updateProperty("home.title");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
    
}

useLanguage(language: string): void {
  this.translate.use(language);
}

}

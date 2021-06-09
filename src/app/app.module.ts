import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HomeComponent } from './component/home/home.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { TeamComponent } from './shared/team/team.component';
import { IntroComponent } from './shared/intro/intro.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './shared/maps/maps.component';
import { ConnectComponent } from './shared/connect/connect.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { FloatComponent } from './shared/float/float.component';
import { MessageComponent } from './shared/message/message.component';
import { PopupComponent } from './shared/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgComponent } from './shared/img/img.component';
import { PhotogalleryComponent } from './shared/photogallery/photogallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { JsonserviceService } from './service/jsonservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    JumbotronComponent,
    WelcomeComponent,
    TeamComponent,
    IntroComponent,
    MapsComponent,
    ConnectComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    FloatComponent,
    MessageComponent,
    PopupComponent,
    ImgComponent,
    PhotogalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANLbEzAbzWWUZ0ytSYF07eQTOInC_UarQ'
    }),
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    BrowserAnimationsModule,
  ],
  providers: [JsonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { OptionComponent } from './components/option/option.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ResultComponent } from './pages/result/result.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    OptionComponent,
    LoadingComponent,
    ResultComponent,
    MenubarComponent,
    QuizzCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

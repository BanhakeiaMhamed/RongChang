import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AudioContextModule } from 'angular-audio-context';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { ReferencesComponent } from './references/references.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AnimalsComponent } from './animals/animals.component'

@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    HomeComponent,
    NotFoundComponent,
    ReferencesComponent,
    QuotesComponent,
    AnimalsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatTooltipModule,
        AudioContextModule.forRoot('balanced'),
        RouterModule.forRoot([
        {
        path:'kitchen',
        component: KitchenComponent
        },
        {
        path:'home',
        component: HomeComponent
        },
        {
        path:'Quiz'
        ,component: QuizComponent
        },
        {
        path:'literature'
        ,component: ReferencesComponent
        },
        {
        path:'animals'
        ,component: AnimalsComponent
        },
        {
        path:'**'
        ,component: NotFoundComponent
        }
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

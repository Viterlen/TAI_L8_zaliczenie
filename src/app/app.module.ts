import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {HomeComponent} from './components/home/home.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogItemComponent} from './components/Blog/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/Blog/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/Blog/blog-item-image/blog-item-image.component';
import {BlogDetailsComponent} from './components/blog/blog-details/blog-details.component';
import {SummaryPipe} from './summary.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'quiz',
        component: QuizComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'blog/details/:id',
        component: BlogDetailsComponent,
    }
]

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        QuizComponent,
        HomeComponent,
        NavbarComponent,
        BlogComponent,
        BlogItemComponent,
        BlogItemTextComponent,
        BlogItemImageComponent,
        BlogDetailsComponent,
        SummaryPipe,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}






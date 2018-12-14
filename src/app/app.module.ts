import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogItemComponent} from './components/Blog/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/Blog/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/Blog/blog-item-image/blog-item-image.component';
import {SummaryPipe} from './summary.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './Directives/text-format.directive';
import {DataServiceService} from "./services/data-service.service";
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";
import {AppRoutingModule} from "./app.routing.module";
import {AuthService} from "../../api/services/auth.service";


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
        SearchBarComponent,
        BlogHomeComponent,
        TextFormatDirective,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        DataServiceService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}






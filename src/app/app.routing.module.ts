import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuizComponent} from "./components/quiz/quiz.component";
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";
import {AdminGuard} from "../../api/services/admin-guard.guard";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'quiz',
        component: QuizComponent,
        canActivate: [AdminGuard],
        data: {state: 'admin'}
    },
    {
        path: 'blog',
        component: BlogHomeComponent,
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
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
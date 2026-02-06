import { Route } from "@angular/router";
import { BlogComponent } from "./blogs/blog/blog.component";
import { BlogLeftComponent } from "./blogs/blog-left/blog-left.component";
import { BlogRightComponent } from "./blogs/blog-right/blog-right.component";
import { BlogSingleComponent } from "./blogs/blog-single/blog-single.component";
import { CausesComponent } from "./causes/causes/causes.component";
import { CausesLeftComponent } from "./causes/causes-left/causes-left.component";
import { CausesRightComponent } from "./causes/causes-right/causes-right.component";
import { CausesSingleComponent } from "./causes/causes-single/causes-single.component";
import { EventsComponent } from "./events/events/events.component";
import { EventsLeftComponent } from "./events/events-left/events-left.component";
import { EventsRightComponent } from "./events/events-right/events-right.component";
import { EventsSingleComponent } from "./events/events-single/events-single.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { ServicesComponent } from "./pages/services/services.component";
import { VolunteersComponent } from "./pages/volunteers/volunteers.component";
import { Error404Component } from "./pages/error404/error404.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from "./index/index.component";
import { FormationComponent } from "./pages/formation/formation.component";
import { RessourceComponent } from "./pages/ressource/ressource.component";
import { QuizDetailComponent } from "./pages/quiz-detail/quiz-detail.component";
import { FormationDetailComponent } from "./pages/formation-detail/formation-detail.component";
import { WebinarDetailComponent } from "./pages/webinar-detail/webinar-detail.component";

export const VIEWS_ROUTE: Route[] = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'formation',
        component: FormationComponent
    },
    { path: 'formation-detail', component: FormationDetailComponent },
    { path: 'quiz-detail', component: QuizDetailComponent },
    { path: 'webinaire-detail', component: WebinarDetailComponent },
    {
        path: 'ressource',
        component: RessourceComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog-left',
        component: BlogLeftComponent
    },
    {
        path: 'blog-right',
        component: BlogRightComponent
    },

    {
        path: 'blog-single',
        component: BlogSingleComponent
    },
    {
        path: 'causes',
        component: CausesComponent
    },
    {
        path: 'causes-left',
        component: CausesLeftComponent
    },
    {
        path: 'causes-right',
        component: CausesRightComponent
    },
    {
        path: 'causes-single',
        component: CausesSingleComponent
    },
    {
        path: 'event',
        component: EventsComponent
    },
    {
        path: 'event-left',
        component: EventsLeftComponent
    },
    {
        path: 'event-right',
        component: EventsRightComponent
    },
    {
        path: 'event-single',
        component: EventsSingleComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'volunteers',
        component: VolunteersComponent
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'index',
        component: IndexComponent
    }

]
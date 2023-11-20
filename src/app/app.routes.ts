import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { MyJobComponent } from './pages/my-job/my-job.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegistrationComponent
    },
    {
        path : 'jobs',
        component : JobsComponent
    },
    {
        path : 'job-detail',
        component : JobDetailsComponent
    },
    {
        path : 'new-job',
        component : CreateNewJobComponent
    },
    {
        path : 'job-listing',
        component : JobListingComponent
    },
    {
        path : 'my-job',
        component : MyJobComponent
    },
    {
        path : '**',
        component : HomeComponent
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path:'',redirectTo:"",pathMatch:'full'},
    {path:"",component:HomeComponent},
    {path:"services",component:ServicesComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:LoginComponent},
    
];

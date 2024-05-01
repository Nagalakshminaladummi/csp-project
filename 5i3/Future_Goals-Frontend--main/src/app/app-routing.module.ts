import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { FutureComponent } from './future/future.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { MechComponent } from './mech/mech.component';

import { InfoComponent } from './info/info.component';
import { CivilComponent } from './civil/civil.component';
import { EeeComponent } from './eee/eee.component';
import { MetallurgeyComponent } from './metallurgey/metallurgey.component';
import { HotelComponent } from './hotel/hotel.component';
import { JournalismComponent } from './journalism/journalism.component';
import { PhotoComponent } from './photo/photo.component';
import { PsychologyComponent } from './psychology/psychology.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FineartsComponent } from './finearts/finearts.component';
import { FashionComponent } from './fashion/fashion.component';
import { GraphicComponent } from './graphic/graphic.component';
import { DwebComponent } from './dweb/dweb.component';
import { UploadComponent } from './upload/upload.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DgameComponent } from './dgame/dgame.component';


import { MainComponent } from './main/main.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { ContactreadComponent } from './contactread/contactread.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterinsertComponent } from './registerinsert/registerinsert.component';
import { LogininsertComponent } from './logininsert/logininsert.component';
import { InterinsertComponent } from './interinsert/interinsert.component';
import { IntergetComponent } from './interget/interget.component';
import { BtechinsertComponent } from './btechinsert/btechinsert.component';
import { BtechgetComponent } from './btechget/btechget.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterreadComponent } from './registerread/registerread.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { QrComponent } from './qr/qr.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursereadComponent } from './courseread/courseread.component';
import { CrudComponent } from './crud/crud.component';
import { AdmincoursereadComponent } from './admincourseread/admincourseread.component';


const routes: Routes = [
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'future',
    component:FutureComponent
  },
  {
    path:'diploma',
    component:DiplomaComponent
  },
  {
    path:'automobile',
    component:AutomobileComponent
  },
  {
    path:'cse',
    component:CseComponent
  },
  {
    path:'ece',
    component:EceComponent
  },
  {
    path:'mech',
    component:MechComponent
  },
 
  {
    path:'info',
    component:InfoComponent
  },
  {
    path:'civil',
    component:CivilComponent
  },
  {
    path:'eee',
    component:EeeComponent
  },
  {
    path:'metallurgey',
    component:MetallurgeyComponent
  },
  {
    path:'hotel',
    component:HotelComponent
  },
  {
    path:'journalism',
    component:JournalismComponent
  },
  {
    path:'photo',
    component:PhotoComponent
  },
  {
    path:'psychology',
    component:PsychologyComponent
  },
  {
    path:'marketing',
    component:MarketingComponent
  },
  {
    path:'finearts',
    component:FineartsComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'graphic',
    component:GraphicComponent
  },
  {
    path:'dweb',
    component:DwebComponent
  },
  {
    path:'upload',
    component:UploadComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'dgame',
    component:DgameComponent
  },
  {
    path:'registerinsert',
    component:RegisterinsertComponent
  },
 
 
 {
  path:'main',
  component:MainComponent
 },
 {
  path:'mainlogin',
  component:MainloginComponent
 },
 {
  path:'contactreadComponent',
  component:ContactreadComponent
 },
 {
  path:'contact',
  component:ContactComponent
 },
 {
  path:'profile',
  component:ProfileComponent
 },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'logininsert',
  component:LogininsertComponent
 },
 {
 path:'interinsert',
 component:InterinsertComponent
},
{
  path:'interget',
  component:IntergetComponent
},
{
  path:'btechinsert',
  component:BtechinsertComponent
},
{
  path:'btechget',
  component:BtechgetComponent
},
{
  path:'feedback',
  component:FeedbackComponent
},
{
  path:'registerread',
  component:RegisterreadComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'qr',
  component:QrComponent
},
{
  path:'adminlogin',
  component:AdminloginComponent
},
{
  path:'adminreg',
  component:AdminregComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'courses',
  component:CoursesComponent
},
{
  path:'courseread',
  component:CoursereadComponent
},
{
  path:'contactread',
  component:ContactreadComponent
},
{
  path:'crud',
  component:CrudComponent
},
{
  path:'admincourseread',
  component:AdmincoursereadComponent
}
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

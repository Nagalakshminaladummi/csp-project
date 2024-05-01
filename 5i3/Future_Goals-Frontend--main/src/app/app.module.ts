import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { FutureComponent } from './future/future.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { MechComponent } from './mech/mech.component';
import { RouterModule } from '@angular/router';
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

import { MainloginComponent } from './mainlogin/mainlogin.component';
import { RegisterinsertComponent } from './registerinsert/registerinsert.component';
import { RegisterreadComponent } from './registerread/registerread.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ContactreadComponent } from './contactread/contactread.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogininsertComponent } from './logininsert/logininsert.component';
import { InterinsertComponent } from './interinsert/interinsert.component';
import { IntergetComponent } from './interget/interget.component';
import { BtechinsertComponent } from './btechinsert/btechinsert.component';
import { BtechgetComponent } from './btechget/btechget.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './qr/qr.component';
import { VocationalComponent } from './vocational/vocational.component';
import { PcComponent } from './pc/pc.component';
import { VochomeComponent } from './vochome/vochome.component';
import { VoccommerceComponent } from './voccommerce/voccommerce.component';
import { VocagrComponent } from './vocagr/vocagr.component';
import { PararuralComponent } from './pararural/pararural.component';
import { ParapathologyComponent } from './parapathology/parapathology.component';
import { PathologyComponent } from './pathology/pathology.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursereadComponent } from './courseread/courseread.component';
import { CrudComponent } from './crud/crud.component';
import { AdmincoursereadComponent } from './admincourseread/admincourseread.component';






@NgModule({
  declarations: [
    AppComponent,
   
    CreateComponent,
        ReadComponent,
        FutureComponent,
        DiplomaComponent,
        AutomobileComponent,
        CseComponent,
        EceComponent,
        MechComponent,
   
        InfoComponent,
        CivilComponent,
        EeeComponent,
        MetallurgeyComponent,
        HotelComponent,
        JournalismComponent,
        PhotoComponent,
        PsychologyComponent,
        MarketingComponent,
        FineartsComponent,
        FashionComponent,
        GraphicComponent,
        DwebComponent,
        UploadComponent,
        DeleteComponent,
        DetailsComponent,
      
        GalleryComponent,
        DgameComponent,
    
        MainloginComponent,
        RegisterinsertComponent,
        RegisterreadComponent,
        MainComponent,
        ContactComponent,
        ContactreadComponent,
        ProfileComponent,
        HomeComponent,
        LoginComponent,
        LogininsertComponent,
        InterinsertComponent,
        IntergetComponent,
        BtechinsertComponent,
        BtechgetComponent,
        FeedbackComponent,
        QrComponent,
        VocationalComponent,
        PcComponent,
        VochomeComponent,
        VoccommerceComponent,
        VocagrComponent,
        PararuralComponent,
        ParapathologyComponent,
        PathologyComponent,
        AdminregComponent,
        AdminloginComponent,
        AdminComponent,
        CoursesComponent,
        CoursereadComponent,
        CrudComponent,
        AdmincoursereadComponent,
    
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule ,
    MatInputModule ,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    QRCodeModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/mainlogin',pathMatch:'full'},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


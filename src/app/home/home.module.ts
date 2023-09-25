import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { InstitutionsComponent } from '../institutions/institutions.component';
import { OrganizationComponent } from '../organization/organization.component';
import { ContactComponent } from '../contact/contact.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PrincipalComponent,CustomFooterComponent, InstitutionsComponent, OrganizationComponent, ContactComponent]
})
export class HomePageModule {}

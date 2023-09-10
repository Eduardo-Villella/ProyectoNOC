import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../register/registerform/registerform.component';
import { HeaderComponent } from '../share/header/header.component';
import { NavComponent } from '../share/nav/nav.component';
import { FooterComponent } from '../share/footer/footer.component';
import { CarouselComponent } from 'src/app/modules/dashboard/carousel/carousel.component';
import { RegisteranswerComponent } from '../register/registeranswer/registeranswer.component';
import { PagesModule } from '../pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';


@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisteranswerComponent,
    CarouselComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    
    //PagesModule //Importo el módulo de pages para hacer uso por ejemplo de quienessomoscomponent
  ],
  exports: [
    DashboardPageComponent,
    CarouselComponent //Exporto mis componentes por si quiero que se usen desde otro lado
  ],
  providers: [],
})
export class DashboardModule {}

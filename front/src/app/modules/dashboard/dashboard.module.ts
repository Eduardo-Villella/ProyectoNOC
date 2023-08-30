import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../../components/register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../../components/register/registerform/registerform.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { RegisteranswerComponent } from '../../components/register/registeranswer/registeranswer.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisteranswerComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    PagesModule //Importo el módulo de pages para hacer uso por ejemplo de quienessomoscomponent
  ],
  exports: [
    DashboardPageComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent //Exporto mis componentes por si quiero que se usen desde otro lado
  ],
  providers: [],
})
export class DashboardModule {}

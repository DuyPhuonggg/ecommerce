import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ]
})
export class HomeModule {}

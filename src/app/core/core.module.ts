import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainareaComponent } from './components/mainarea/mainarea.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {routes} from './core.routes'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderComponent, MainareaComponent, FooterComponent, HomeComponent],
  exports: [HeaderComponent, MainareaComponent, FooterComponent]
})
export class CoreModule { }

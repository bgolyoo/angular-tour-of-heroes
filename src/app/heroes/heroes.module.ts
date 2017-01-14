import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }

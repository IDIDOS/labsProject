import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeaderComponent,
    TaskListComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {

}

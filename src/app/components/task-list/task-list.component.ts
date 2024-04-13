import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  private route = inject(Router)
  private stepService = inject(StepsService)
  public stepArrLength!: number[]
  public onRedirectToStep(id: number) {
    this.route.navigate(['/step', id])
  }
  ngOnInit(): void {
    this.stepArrLength = this.stepService.getStepLength()
  }
}

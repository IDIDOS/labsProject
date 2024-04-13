import { Component, DestroyRef, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Step } from '../../data/data';
import { StepsService } from '../../services/steps.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { of, Observable } from 'rxjs'
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-step',
  standalone: true,
  imports: [HeaderComponent, MatProgressSpinnerModule, CommonModule, MatButtonModule, FooterComponent],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  private destroyRef = inject(DestroyRef)
  private activatedRoute = inject(ActivatedRoute)
  private stepService = inject(StepsService);
  private route = inject(Router)
  public isLastStep = false;
  private id!: number;
  public step!: Step
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe(params => {
        this.id = params["id"];
        this.step = this.stepService.getStep(this.id)
        this.isLastStep = this.stepService.getStepLength().length === this.step.id ? true : false;
      })
  }
  public redirectToNextStep() {
    this.route.navigate(['/step', ++this.id])

  }
  public redirectToHome() {
    this.route.navigate(['/home'])
  }

}

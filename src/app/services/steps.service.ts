import { Injectable } from '@angular/core';
import { dataTask, Step } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  public steps: Step[] = dataTask;
  public getStep(id: number): Step {
    const filteredSteps = this.steps.filter(stepItem => stepItem.id == id);
    return filteredSteps[0];
  }
  public getStepLength(): number[] {
    const arr: number[] = this.steps.map(step => step.id)
    return arr
  }
}

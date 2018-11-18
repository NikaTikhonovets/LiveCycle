import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-name-filed',
  templateUrl: './name-filed.component.html',
  styleUrls: ['./name-filed.component.css']
})
export class NameFiledComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name: string;
  skills: number[] = [];
  oldName: string = this.name;
  sumSkills: number;

  constructor() {}
  increase(item: number) {
    this.skills[item]++;
  }
  decrease(item: number) {
    this.skills[item]--;
  }
  sum() {
    this.sumSkills = 0;
    for (const item of [0, 1, 2]) {
      this.sumSkills += this.skills[item];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const presName in changes) {
      const chng = changes[presName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`OnChanges: Previous name: ${prev} Current name: ${cur}`);
    }
  }
  ngOnInit() {
    for (const item of [0, 1, 2]) {
      this.skills[item] = 0;
    }
    console.log('OnInit: Init skills');
  }
  ngDoCheck() {
    for (const item of [0, 1, 2]) {
      if (this.skills[item] < 0) {
        console.log(`DoCheck: ${item}`);
        this.skills[item] = 0;
      }
    }
    if (this.oldName !== this.name) {
      console.log(`DoCheck: Person name changed to ${this.name} from ${this.oldName}`);
    }
  }
  ngOnDestroy() {
    console.log('OnDestroy: Deleted component');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked: Input data was changed');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lifecycle',
//   templateUrl: './lifecycle.component.html',
//   styleUrl: './lifecycle.component.css'
// })
// export class LifecycleComponent {

// }


// lifecycle.component.ts
import { Component, Input, OnChanges, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <div>
      <h2>Lifecycle Component</h2>
      <p>Data received: {{ inputData }}</p>
      <p>OnInit: {{ onInitCount }}</p>
      <p>OnChanges: {{ ngOnChangesCount }}</p>
      <p>AfterViewInit: {{ afterViewInitCount }}</p>
    </div>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() inputData: string = '';

  onInitCount: number = 0;
  ngOnChangesCount: number = 0;
  afterViewInitCount: number = 0;
  // dynamicData: string = '';

  ngOnInit() {
    this.onInitCount++;
    console.log('ngOnInit triggered');
  }

  ngOnChanges() {
    this.ngOnChangesCount++;
    console.log('ngOnChanges triggered');
  }

  ngAfterViewInit() {
    this.afterViewInitCount++;
    console.log('ngAfterViewInit triggered');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy triggered');
  }
}


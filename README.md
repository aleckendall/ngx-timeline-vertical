# Table of Contents
* [What is Angular Timline Vertical?](#description-id)
* [Dependencies](#dependencies-id)
* [Install](#install-id)
* [Example](#demo-id)
* [FAQ](#faq-id)
* [Troubleshooting](#troubleshooting-id)
* [How to Contribute](#contribute-id)
* [License](#license-id)


## <a name="description-id"></a>What is Angular Timeline Vertical?

ngx-timeline-vertical is an Angular library that can be imported into any Angular application for quick creation of a vertical timeline. ngx-timeline-vertical is responsive and lightweight. The code can be viewed on [github](https://github.com/welcher2/ngx-timeline-vertical). Created by Alec Kendall.


## <a name="dependencies-id"></a>Dependencies

| ngx-timeline-vertical      | Angular | 
| :----:        |    :----:   |
| current      | >=9.x       |

## <a name="install-id"></a>Install

Navigate to your project directory:

~~~
cd example-app
~~~

Install `ngx-timeline-vertical` through npm:

~~~
npm install --save ngx-timeline-vertical
~~~

## <a name="demo-id"></a>Example

### From 0 to 1

Create an Angular application:

~~~
ng new example-app
~~~

Navigate to the project directory:

~~~
cd example-app
~~~

Install `ngx-timeline-vertical` through npm:

~~~
npm install --save ngx-timeline-vertical
~~~

Import the `NgxTimelineVerticalModule` into your `AppModule.ts`:

~~~typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Import the NgxTimelineVerticalModule
import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Add the NgxTimelineVerticalModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTimelineVerticalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

~~~

Import the Event, Point, Line, TimelineProperties, TimelineSegment types into app.component.ts:

~~~typescript
import { Event, Point, Line, TimelineProperties, TimlineSegment } from 'ngx-timeline-vertical';
~~~

Add the NgxTimelineComponent selector to app.component.html:

~~~html
<ngx-timeline></ngx-timeline>
~~~

NgxTimelineComponent has four `Input` properties: 

~~~typescript
timelineThickness: string;
startpoint: Point;
endpoint: Point;
timelineSegments: TimelineSegment[]
~~~

In app.component.ts, create the variables to pass to NgxTimelineComponent's `Input` properties. 
You can give them a name of your choice. In this example, each variable name mirrors the `Input` property it will be binded to.

Your `app.component.ts` should now contain:

~~~typescript
import { Component } from '@angular/core';
import { Event, Point, Line, TimelineProperties, TimlineSegment } from 'ngx-timeline-vertical';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-app';
  
  timelineThickness: string;
  startpoint: Point;
  endpoint: Point;
  //Ensure timelineSegments is initialized to an empty array. You will later push a TimelineSegment 
  //to this array. If the variable isn't initialized, Angular will throw an error.
  timelineSegments: TimelineSegment[] = [];

  ngOnInit() {
    
  }
}
~~~

Create a function to initialize `startpoint` and `endpoint`:

~~~typescript
ngxPointInit(): void {
    //The Point constructor takes _size: string, _color: string, _borderRadius: string
    this.startpoint = new Point('40px', '#B10CC8', '30px');
    this.endpoint = new Point('40px', '#B10CC8', '30px');
}
~~~

Create a function to intialize `timelineThickness`:

~~~typescript
ngxTimelineThicknessInit(): void {
    this.timelineThickness = '20px';
}
~~~

Create a function to initalize `timelineSegments`. Leave it blank for now:

~~~typescript
ngxTimelineSegmentsInit(): void {
    
}
~~~

A TimelineSegment constructor takes, in order of appearance, a `TimelineProperties`,  `Point`,  `Event` and `Line`. All parameters are optional. `TimelineProperties` and `Event` are initialized to default values if they aren't provided.

`TimelineProperties` field values are by default set to:

    color: string = '#0074D9', height: string = '100px'.

`Event` field values are by default set to:

    fontColor: string = '#5D21D0', fontSize: string  = '16px', side: string = 'right', 
    text: string = ''

Create a `TimelineSegment` in `ngxTimelineSegmentsInit()`. Leave the constructor blank:

~~~typescript
ngxTimelineSegmentsInit(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
}
~~~

Push the created `TimelineSegment` onto the `timelineSegments` array:

~~~typescript
ngxTimelineSegmentsInit(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    this.timelineSegments.push(timelineSegment);
}
~~~

Call `ngxPointInit()`, `ngxTimelineThicknessInit()`, and `ngxTimelineSegmentsInit()` from within `ngOnInit()`:

~~~typescript
ngOnInit() {
  this.ngxPointInit();
  this.ngxTimelineThicknessInit();
  this.ngxTimelineSegmentsInit();
}
~~~

Your `app.component.ts` should now contain:

~~~typscript
import { Component } from '@angular/core';
import { Point, TimelineSegment, Line, Event } from 'ngx-timeline-vertical';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-app';

  endpoint: Point;
  startpoint: Point;
  timelineThickness: string;
  timelineSegments: TimelineSegment[] = [];

  ngOnInit() {
    this.ngxPointInit();
    this.ngxTimelineThicknessInit();
    this.ngxTimelineSegmentsInit();
  }

  ngxPointInit(): void {
    //The Point constructor takes _size: string, _color: string, _borderRadius: string
    this.startpoint = new Point('40px', '#B10CC8', '30px');
    this.endpoint = new Point('40px', '#B10CC8', '30px');
  }
  
  ngxTimelineThicknessInit(): void {
    this.timelineThickness = '20px';
  }

  ngxTimelineSegmentsInit(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    this.timelineSegments.push(timelineSegment);
  }
}
~~~

In `app.component.html`, bind your `app.component.ts` variables to `<ngx-timeline></ngx-timline>` `Input` properties:

~~~
<ngx-timeline
[timelineThickness]="timelineThickness"
[startpoint]="startpoint"
[endpoint]="endpoint"
[timelineSegments]="timelineSegments"
></ngx-timeline>
~~~

Serve your Angular application:

~~~
ng serve
~~~

Open a browser and navigate to the link provided by Angular:

![localhost:4200](https://i.imgur.com/bzqunhu.png)

You should see:

![ngx-timeline-vertical](https://i.imgur.com/SQVlz8F.png)

## <a name="faq-id"></a>FAQs

 1. Can I change the timeline thickness?
     
     * Yes. The timeline thickness is an `Input` property of the `NgxTimelineComponent`. It can be changed by passing a value to `[timelineThickness]`:
     
     `<ngx-timeline [timelineThickness]="{{ your_thickness_variable }}"></ngx-timeline>`
  
 2. Can I change the font color or size?
     
     * Yes. The font size and color can be changed by calling `setFontSize()` and `setFontColor()` on the corresponding `Event`.

 3. Can I change the timeline height?
     
     * Yes. Timeline segments have a minimum height. It can be set by calling `setHeight()` on the corresponding `timlineProperties`.
     
4. Can I change the timeline color?

     * Yes. The timeline color can be changed by calling `setColor()` on the corresponding `timelineProperties`.

 5. Can I make the timeline horizontal?
 
     * Not currently.
    
 
## <a name="troubleshooting-id"></a>Troubleshooting

1. Report an issue on [github](https://github.com/welcher2/ngx-timeline-vertical).
2. Reach out to me [directly](http://demoalpha.com/contact).

## <a name="contribute-id"></a>How to Contribute

Contributions are not currently being accepted. If you enjoy the library, check out my site and follow along with my other [projects](http://demoalpha.com/projects).

## <a name="license-id"></a>License

Licensed under the MIT license.







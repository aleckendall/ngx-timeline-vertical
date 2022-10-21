# ngx-timeline-vertical - Angular vertical timeline widget
![version](https://img.shields.io/badge/npm-v1.0.2-blue) ![build](https://img.shields.io/badge/build-passing-green) ![minified](https://img.shields.io/badge/minified-10.9kB-green)

# Table of Contents
* [What is Angular Timline Vertical?](#description-id)
* [Dependencies](#dependencies-id)
* [Install](#install-id)
* [Example](#demo-id)
    * [Create a timeline](#create-timeline)
    * [Add an event](#add-event)
    * [Add a point](#add-point)
    * [Add a line](#add-line)
    * [Wrapping up](#wrapping-up)
* [FAQ](#faq-id)
* [Troubleshooting](#troubleshooting-id)
* [How to Contribute](#contribute-id)
* [License](#license-id)


## <a name="description-id"></a>What is Angular Timeline Vertical?

A componentized, lightweight and dynamic library for creating vertical timelines in Angular.


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

### <a name="create-timeline"></a>Create a timeline

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

Import the `Event`, `Point`, `Line`, `TimelineProperties`, `TimelineSegment` types into `app.component.ts`:

~~~typescript
import { Event, Point, Line, TimelineProperties, TimlineSegment } from 'ngx-timeline-vertical';
~~~

Add the `NgxTimelineComponent` selector to `app.component.html`:

~~~html
<ngx-timeline></ngx-timeline>
~~~

`NgxTimelineComponent` has four `Input` properties: 

~~~typescript
timelineThickness: string;
startpoint: Point;
endpoint: Point;
timelineSegments: TimelineSegment[]
~~~

In `app.component.ts`, create the variables to pass to `NgxTimelineComponent`'s `Input` properties. 
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

Create a function to initialize `timelineThickness`:

~~~typescript
ngxTimelineThicknessInit(): void {
    this.timelineThickness = '20px';
}
~~~

Create a function to initialize `timelineSegments`. Leave it blank for now:

~~~typescript
ngxTimelineSegmentsInit(): void {
    
}
~~~

A `TimelineSegment` constructor takes, in order of appearance, a `TimelineProperties`,  `Point`,  `Event` and `Line`. All parameters are optional. `TimelineProperties` and `Event` are initialized to default values if they aren't provided.

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

~~~html
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

### <a name="add-event"></a>Add an event

This section builds off of [Create a timeline](#create-timeline).

Create a function in `app.component.ts` named `addEvent()`. Leave it blank for now.

~~~typescript
addEvent(): void {

}
~~~

The `Event` constructor takes four fields, in order of appearance: 

~~~typescript
_fontColor: string;
_fontSize: string;
_side: string;
_text: string;
~~~

By default these values are set to:

~~~typescript
_fontColor: string = '#5D21D0'
_fontSize: string  = '16px', 
_side: string = 'right'
_text: string = ''
~~~

Create a new `TimelineSegment` in `addEvent()`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
}
~~~

If an `Event` is not passed to the constructor, `TimelineSegment` will initialize `Event` to a its default values. You can access the `Event` of a `TimelineSegment` by calling `getEvent()` on the corresponding `TimlineSegment`. From there, you can change any of the four fields within the `Event` by calling the desired field's setter function: `setFontColor()`, `setFontSize()`, `setSide()`, and `setText()`.

Change your `Event`'s `text` to the string `'This event was added'`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    //Set the text to 'This event was added'.
    timelineSegment.getEvent().setText('This event was added');
}
~~~

By default, an `Event` will be displayed on the right side of a timeline. The `Event`'s `side` field accepts the strings `'left'` or `'right'`. 

Change your `Event`'s `side` field to display `text` on the left side of the timeline:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    //Set the Event side to be on the 'left' of the timeline.
    timelineSegment.getEvent().setSide('left');
}
~~~

### <a name="add-point"></a> Add a point

This section builds off of [Add an event](#add-event).

The `Point` constructor takes three fields, in order of appearance: 

~~~typescript
_size: string;
_color: string;
_borderRadius: string;
~~~

By default these values are set to:

~~~typescript
_size: string  = '30px';
_color: string = '#39CCCC';
_borderRadius: string = '30px';
~~~

If a `Point` is not passed to the constructor, `TimelineSegment` will set it to `null`. You can set the `Point` of a `TimelineSegment` by calling `setPoint()` and passing as an argument to `setPoint()` a `Point`. You can then access the `Point` by calling `getPoint()` on `TimelineSegment`. From there, you can change any of the three fields within `Point` by calling the desired field's setter function:  `setSize()`, `setColor()`, and `setBorderRadius()`.

Create a `Point` in the function `addEvent()`. Set `size` to `'20px'`, `color` to `'red'`, and `borderRadius` to `'30px'`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    //Create a new point with a size of '20px', color of 'red', and borderRadius of '30px'. 
    let point: Point = new Point('20px', 'red', '30px');
}
~~~

Add the `Point` to `timelineSegment`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    //Create a new point with a size of '20px', color of 'red', and borderRadius of '30px'. 
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
}
~~~

### <a name="add-line"></a>Add a line

This section builds off of [Add a point](#add-point).

The `Line` constructor takes three fields, in order of appearance: 

~~~typescript
_style: string;
_color: string;
_thickness: string;
~~~

By default these values are set to:

~~~typescript
_style: string = 'solid';
_color: string = '#39CCCC';
_thickness: string  = '2px';
~~~

If a `Line` is not passed to the construtor, `TimelineSegment` will set it to `null`. You can set the `Line` of a `TimelineSegment` by calling `setLine()` and passing as an argument to `setLine()` a `Line`. You can then access the `Line` by calling `getLine()` on `TimelineSegment`. From there, you can change any of the three fields within `Line` by calling the desired field's setter function: `setStyle()`, `setColor()`, and `setThickness()`.

Create a `Line` in function `addEvent()`. Leave the constructor blank:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    //Create a default line
    let line: Line = new Line();
}
~~~

Change the `Line` `style` to `'dashed'`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    let line: Line = new Line();
    //Change the line style to 'dashed'
    line.setStyle('dashed');
}
~~~

Add the `Line` to `timelineSegment`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    let line: Line = new Line();
    line.setStyle('dashed');
    //Add the line to timelineSegment
    timelineSegment.setLine(line);
}
~~~

Your `app.component.ts` should now look like:



### <a name="wrapping-up"></a>Wrapping up

Within `addEvent()`, push the `TimelineSegment` to `timelineSegments`:

~~~typescript
addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    let line: Line = new Line();
    line.setStyle('dashed');
    timelineSegment.setLine(line);
    //Push timelineSegment to timelineSegments
    this.timelineSegments.push(timelineSegment);
}
~~~

Add a button to `app.component.html` and bind it's `(click)` listener to `addEvent()`:

~~~html
<ngx-timeline
[timelineThickness]="timelineThickness"
[startpoint]="startpoint"
[endpoint]="endpoint"
[timelineSegments]="timelineSegments"
></ngx-timeline>
<button (click)="addEvent()">Click Me!</button>
~~~

Your `app.component.ts` should now look like:

~~~typescript
import { Component } from '@angular/core';
import { Point, TimelineSegment, Line, Event, NgxTimelineLineComponent, TimelineProperties } from 'ngx-timeline-vertical';

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
    timelineSegment.timelineProperties.setColor('#FFDC00');
    this.timelineSegments.push(timelineSegment);
  }

  addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    let line: Line = new Line();
    line.setStyle('dashed');
    timelineSegment.setLine(line);
    //Push timelineSegment to timelineSegments
    this.timelineSegments.push(timelineSegment);
  }

}
~~~

Run your application:

~~~
ng serve
~~~

Navigate to the localhost port provided by Angular.

Click the button and you should now see:

![demo](https://i.imgur.com/PtkAtwH.png)

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

Contributions are welcome. Simply create a pull request and I will review it then merge.

## <a name="license-id"></a>License

Licensed under the MIT license.







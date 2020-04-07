# What is Angular Timeline Vertical?

ngx-timeline-vertical is an Angular library that can be imported into any Angular application for quickly creation of a vertical timeline. ngx-timeline-vertical is responsive and lightweight. The code can be viewed on [github](https://github.com/welcher2/ngx-timeline-vertical). Created by Alec Kendall.

## Requirements

Angular

## Install


Create an Angular application:

~~~
ng new my-app
~~~

Navigate to your Angular project directory:

~~~
cd my-app
~~~

Install `ngx-timeline-vertical` through npm:

~~~
npm install --save ngx-timeline-vertical
~~~

Then import the `NgxTimelineVerticalModule` and `CommonModule` into your `AppModule.ts`:

~~~typescript
import { BrowserModule } from '@angular/platform-browser';
//Ensure that CommonModule has been imported.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Add CommonModule and NgxTimelineVerticalModule to imports
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgxTimelineVerticalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

## Demo



## FAQs

 1. Can I change the timeline color or size?
     * Yes, the timeline thickness and color can be changed through property binding.
  

 2. Can I change the font color or size?
     * Yes, the font size and color can be changed through property binding.

 3. Can I make the timeline taller?
     * Timeline events have a fixed height depending on the text for the event. This allows the timeline to be responsive on all devices. To make the timeline taller, insert a blank event, then specify the height through property binding.

## Troubleshooting

1. Report an issue on [github](https://github.com/welcher2/ngx-timeline-vertical).
2. Reach out to me [directly](http://demoalpha.com/contact).

## How to Contribute

Contributions are not currently being accepted. If you enjoy the library, check out my site and follow along with my other [projects](http://demoalpha.com/projects).

## Licensing

None







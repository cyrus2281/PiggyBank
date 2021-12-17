import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'pg-side-bar-item-wrapper',
  template: '',
})
export class SideBarItemWrapperComponent {

  constructor(
    private componentResolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef
) {}



}

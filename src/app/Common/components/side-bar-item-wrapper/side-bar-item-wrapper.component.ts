import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { SideBarActionEventEnum } from '../../enum/side-bar-action-event.enum';
import { SideBarItemModel } from '../../models/side-bar-item.model';
import { SideBarItemComponent } from '../side-bar-item/side-bar-item.component';

@Component({
  selector: 'pg-side-bar-item-wrapper',
  template: '',
})
export class SideBarItemWrapperComponent<T extends SideBarItemModel> {
  _model!: SideBarItemComponent<T>;
  @Output() action = new EventEmitter<SideBarActionEventEnum>();

  @Input() set model(model: T) {
    this.setModel(model);
  }

  constructor(
    private componentResolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef
  ) { }

  /**
   * This function creates an instance of the given model for the sidebar and replaces its view
   *
   * @param model sidebar model
   * @returns component references
   */
  private setModel(model: T): ComponentRef<SideBarItemComponent<T>> {
    this.viewContainer.clear();

    const modelComponentType = model.type;

    const componentFactory = this.componentResolver.resolveComponentFactory(modelComponentType);
    const componentRef = this.viewContainer.createComponent(componentFactory);

    this._model = componentRef.instance;
    this._model.model = model;
    this._model.action.subscribe(action => this.action.emit(action));

    return componentRef;
  }
}

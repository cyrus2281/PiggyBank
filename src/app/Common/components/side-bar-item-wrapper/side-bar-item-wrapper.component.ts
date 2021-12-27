import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { SideBarActionEventEnum } from '../../enum/side-bar-action-event.enum';
import { SideBarItemModel } from '../../models/side-bar-item.model';
import { SideBarItemComponent } from '../side-bar-item/side-bar-item.component';

@Component({
  selector: 'pg-side-bar-item-wrapper',
  template: '',
})
export class SideBarItemWrapperComponent<T extends SideBarItemModel> {
  private _component!: SideBarItemComponent<T>;
  private _model!:T;
  private _active: boolean = false;

  @Output() action = new EventEmitter<SideBarActionEventEnum>();

  @Input() set active(active: boolean) {
    this._active = active
    this.setModel(this._model);
  }

  @Input() set model(model: T) {
    this._model = model;
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

    this._component = componentRef.instance;
    this._component.model = model;
    this._component.active = this._active;
    this._component.action.subscribe(action => this.action.emit(action));

    return componentRef;
  }
}

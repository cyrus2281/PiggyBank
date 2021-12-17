import { Component, ComponentFactoryResolver, ComponentRef, Input, ViewContainerRef } from '@angular/core';
import { SideBarItemModelInterface } from '../../models/side-bar-item.model';
import { SideBarItemComponent } from '../side-bar-item/side-bar-item.component';

@Component({
  selector: 'pg-side-bar-item-wrapper',
  template: '',
})
export class SideBarItemWrapperComponent<T extends SideBarItemModelInterface> {
  _model!: SideBarItemComponent<T>;

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

    return componentRef;
  }
}

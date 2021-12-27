import { ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogOptionsModel } from '../models/dialog-options.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  openDialog(
    dialog: Type<any>,
    options: DialogOptionsModel = {},
    injector: Injector = this.injector) {
    const dialogFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const dialogRef = dialogFactory.create(injector);

    dialogRef.instance.component = dialog;
    if (options.inputs) dialogRef.instance.inputs = options.inputs;
    if (options.outputs) dialogRef.instance.outputs = options.outputs;
    if (options.closeOnclickAway) dialogRef.instance.closeOnclickAway = options.closeOnclickAway;
    if (options.includeCloseIcon) dialogRef.instance.includeCloseIcon = options.includeCloseIcon;

    this.appRef.attachView(dialogRef.hostView);
    const domElem = (dialogRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    const close = () => {
      this.appRef.detachView(dialogRef.hostView);
      dialogRef.destroy();
    }

    dialogRef.instance.close.subscribe(() => close());

    return { dialogRef, close };
  }
}

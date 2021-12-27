import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, EventEmitter, Injector, Input, OnDestroy, Output, Type, ViewChild } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';

@Component({
  selector: 'pg-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  app_theme = APP_THEME;

  @Input() component!: Type<any>;
  @Input() inputs!: { [key: string]: Object };
  @Input() outputs!: { [key: string]: Function };

  @Input() closeOnclickAway: boolean = false;
  @Input() includeCloseIcon: boolean = false;

  @Output() close = new EventEmitter<boolean>();

  @ViewChild('modal') modal!: ElementRef;

  private subscriptions = new SubSink();
  closing: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    ) {}

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const componentRef = componentFactory.create(this.injector);

    if (this.inputs) {
      const inputKeys = Object.keys(this.inputs);
      inputKeys.forEach(key => componentRef.instance[key] = this.inputs[key]);
    }

    if (this.outputs) {
      const outputKeys = Object.keys(this.outputs);
      outputKeys.forEach(key => this.subscriptions.add(componentRef.instance[key]?.subscribe(this.outputs[key])));
    }

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.modal.nativeElement.appendChild(domElem);
  }

  onFadeClick(event: Event){
    if (this.closeOnclickAway && (<HTMLElement> event.target).classList.contains('dialog-fade')) {
      this.closeDialog();
    }
  }

  closeDialog(){
    this.closing = true;
    setTimeout(() => {
      this.close.emit(true);
    }, 500);
  }

  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.unsubscribe();
  }

}

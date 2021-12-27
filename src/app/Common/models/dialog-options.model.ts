export interface DialogOptionsModel {
  inputs?: { [key: string]: Object };
  outputs?: { [key: string]: Function };
  closeOnclickAway?: boolean;
  includeCloseIcon?: boolean;
}

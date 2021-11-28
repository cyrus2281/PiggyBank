import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouterService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  /**
   * goes to an absolute path
   * @param path array of absolute paths
   */
  goTo(path: string[]) {
    this.router.navigate(path);
  }

  /**
   * goes to a relative path
   * @param path array of relative paths
   */
  goToRelative(path: string[]) {
    this.router.navigate(path,{relativeTo:this.route})
  }

  /**
   * get activated route object
   * @returns activated route object
   */
  getRoute(): ActivatedRoute {
    return this.route;
  }

  /**
   * get the route params snapshot
   * @returns Route params
   */
  getParamsSnapshot(): Params {
    return this.route.snapshot.params;
  }

  /**
   * get route params observable
   * @returns route params observable
   */
  getParams(): Observable<Params> {
    return this.route.params;
  }


}

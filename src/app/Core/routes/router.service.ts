import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouterService {
  readonly app_route = '/';
  readonly login_route = '/account/signin';
  readonly privacy_route = '/disclaimer/privacy_policy';
  readonly cookies_route = '/disclaimer/cookies_policy';
  readonly terms_route = '/disclaimer/terms_conditions';

  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   * goes to an absolute path
   * @param path array of absolute paths
   * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goTo(path: string[]) {
    return this.router.navigate(path);
  }

  /**
   * goes to a relative path
   * @param path array of relative paths
   */
  goToRelative(path: string[]) {
    this.router.navigate(path, { relativeTo: this.route })
  }

  /**
   * goes to app page
   * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goToApp() {
    return this.goTo([this.app_route]);
  }

  /**
    * goes to login page
    * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goToLogin() {
    return this.goTo([this.login_route]);
  }

  /**
    * goes to login page
    * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goToPrivacyPolicy() {
    return this.goTo([this.privacy_route]);
  }

  /**
    * goes to login page
    * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goToCookiesPolicy() {
    return this.goTo([this.cookies_route]);
  }

  /**
    * goes to login page
    * @returns Promise<boolean> A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
   */
  goToTermsConditions() {
    return this.goTo([this.terms_route]);
  }

  /**
   * get activated route object
   * @returns activated route object
   */
  getRoute(): ActivatedRoute {
    return this.route;
  }

  /**
   * get router object
   * @returns router object
   */
  getRouter(): Router {
    return this.router;
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

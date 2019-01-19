/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for AdventureJar services
 */
@Injectable({
  providedIn: 'root',
})
export class AdventureJarConfiguration {
  rootUrl: string = 'http://adventurejarwebapi.eu-west-1.elasticbeanstalk.com';
}

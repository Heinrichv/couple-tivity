/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdventureJarConfiguration } from './adventure-jar-configuration';

import { AccountService } from './services/account.service';
import { ActivityService } from './services/activity.service';

/**
 * Provider for all AdventureJar services, plus AdventureJarConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AdventureJarConfiguration,
    AccountService,
    ActivityService
  ],
})
export class AdventureJarModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HttpClientModule } from "@angular/common/http";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TNSFrescoModule } from "nativescript-fresco/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        HttpClientModule,
        TNSFrescoModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFrescoModule } from "nativescript-fresco/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { HttpClientModule } from "@angular/common/http";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular/autocomplete-directives";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular/dataform-directives";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { AdventureJarModule } from "~/services/api/adventurejar/adventure-jar.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ManageComponent } from "./manage/manage.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        TNSFrescoModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIListViewModule,
        HttpClientModule
    ],
    providers: [
        AdventureJarModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ManageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

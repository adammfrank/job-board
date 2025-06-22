import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: "app-root",
  imports: [NavigationComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "job-board";
}

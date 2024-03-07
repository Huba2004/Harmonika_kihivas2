import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = [
    { title: "Cím 1", content: "Tartalom 1", icon: "expand_more" },
    { title: "Cím 2", content: "Tartalom 2", icon: "expand_more" },
  ];
}

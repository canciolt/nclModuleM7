import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-a",
  templateUrl: "./a.component.html",
  styleUrls: ["./a.component.css"]
})
export class AComponent implements OnInit {
  @Input() url: string;
  @Input() title: string = "";
  @Input() class: string = "";
  @Input() caret: boolean;
  className: string;

  constructor() {}

  ngOnInit() {
    this.className = this.class ? this.class : "";
  }
}

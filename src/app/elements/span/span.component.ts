import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-span",
  templateUrl: "./span.component.html",
  styleUrls: ["./span.component.css"]
})
export class SpanComponent implements OnInit {
  @Input() class: string;
  @Input() title: string;

  className: string;
  constructor() {}

  ngOnInit() {}
}

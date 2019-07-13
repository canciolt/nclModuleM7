import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[app-c15]",
  templateUrl: "./c15.component.html",
  styleUrls: ["./c15.component.css"]
})
export class C15Component implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit() {}
}

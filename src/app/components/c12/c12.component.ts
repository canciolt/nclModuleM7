import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[app-c12]",
  templateUrl: "./c12.component.html",
  styleUrls: ["./c12.component.css"]
})
export class C12Component implements OnInit {
  @Input() item: any;

  className: string;
  constructor() {}

  ngOnInit() {
    this.className = this.item.hasOwnProperty("image")
      ? "c12  -frontImage"
      : "c12";
  }
}

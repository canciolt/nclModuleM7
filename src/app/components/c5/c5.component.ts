import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[app-c5]",
  templateUrl: "./c5.component.html",
  styleUrls: ["./c5.component.css"]
})
export class C5Component implements OnInit {
  @Input() image: string;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}

  getUrl() {
    return `../assets/images/${this.image}`;
  }
}

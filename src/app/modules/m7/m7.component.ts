import { Component, OnInit } from "@angular/core";
import Data from "../../../assets/data.json";

@Component({
  selector: "app-m7",
  templateUrl: "./m7.component.html",
  styleUrls: ["./m7.component.css"]
})
export class M7Component implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {
    this.data = Data;
  }
}

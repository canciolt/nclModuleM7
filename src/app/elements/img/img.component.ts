import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  @Input() class: string;
  @Input() url: string;
  @Input() alt: string;

  className: string;
  constructor(private sanitizer: DomSanitizer) {}

  getUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.url);
  }
  ngOnInit() {
    this.className = this.class;
  }
}

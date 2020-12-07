import { Component, OnInit } from "@angular/core";
import { ConfirmBoxService } from "./confirm-box.service";

@Component({
  selector: "confirm-box",
  templateUrl: "./confirm-box.component.html",
  styleUrls: ["./confirm-box.component.css"],
})
export class ConfirmBoxComponent implements OnInit {
  constructor(public cbService: ConfirmBoxService) {}

  ngOnInit(): void {}
}

import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
   
  serverElements = [];
  // newServerName = "";
  newServerContent = "";

  onAddServer(name: HTMLInputElement) {
    this.serverCreated.emit({serverName: name.value, serverContent: this.newServerContent})
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: name.value, serverContent: this.newServerContent})
  }
  constructor() {}

  ngOnInit(): void {}
}

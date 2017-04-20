import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  private facility: string = "SAMPLE";

  @Input()
  private doctor: string = "SAMPLE";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private logOut() {
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }

}

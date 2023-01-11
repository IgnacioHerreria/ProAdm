import { Router, ActivationEnd } from "@angular/router";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, map } from "rxjs/operators";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: []
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titleSubs$: Subscription;
  public titleTab: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.titleSubs$ = this.getDataRoute().subscribe(data => {
      this.titleTab = data.title;
      this.title.setTitle(this.titleTab);
      const metaTag: MetaDefinition = {
        name: "description",
        description: this.titleTab
      };

      this.meta.updateTag(metaTag);
    });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  ngOnInit() { }

  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}

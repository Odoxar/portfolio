import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { AnalyticsService } from "../shared/services/analytics.service";
import { AnalyticsPage } from "../shared/interfaces";
import { Subscription } from "rxjs";
import { Chart } from "chart.js";

@Component({
  selector: "app-analytics-page",
  templateUrl: "./analytics-page.component.html",
  styleUrls: ["./analytics-page.component.css"]
})
export class AnalyticsPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild("take")
  takeRef: ElementRef;
  @ViewChild("order")
  orderRef: ElementRef;

  public average: number;
  public pending: boolean = true;

  private aSub: Subscription;
  constructor(private analyticsService: AnalyticsService) {}

  ngAfterViewInit() {
    const takeConfig: any = {
      label: "Take",
      color: "rgb(255, 99, 132)"
    };
    const orderConfig: any = { label: "Orders", color: "rgb(54, 162, 235)" };

    this.aSub = this.analyticsService
      .getAnalytics()
      .subscribe((data: AnalyticsPage) => {
        this.average = data.average;

        takeConfig.labels = data.chart.map(item => item.label);
        takeConfig.data = data.chart.map(item => item.take);

        orderConfig.labels = data.chart.map(item => item.label);
        orderConfig.data = data.chart.map(item => item.order);

        // **** Gain ****
        //takeConfig.labels.push('26.09.2018')
        //takeConfig.labels.push('09.05.2018')
        //takeConfig.data.push(1500)
        //takeConfig.data.push(700)
        // **** /Gain ****

        // **** Order ****
        /* orderConfig.labels.push('26.09.2018')
        orderConfig.labels.push('27.09.2018')
        orderConfig.data.push(8)
        orderConfig.data.push(2) */
        // **** /Order ****

        const takeCtx = this.takeRef.nativeElement.getContext("2d");
        const orderCtx = this.orderRef.nativeElement.getContext("2d");
        takeCtx.canvas.height = "300px";
        orderCtx.canvas.height = "300px";

        new Chart(takeCtx, createChartConfig(takeConfig));
        new Chart(orderCtx, createChartConfig(orderConfig));

        this.pending = false;
      });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}

function createChartConfig({ labels, data, label, color }) {
  return {
    type: "line",
    options: {
      responsive: true
    },
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          borderColor: color,
          steppedLine: false,
          fill: false
        }
      ]
    }
  };
}

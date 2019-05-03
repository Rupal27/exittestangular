import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HouseService } from '../house.service';


@Component({
  selector: 'app-statebargraph',
  templateUrl: './statebargraph.component.html',
  styleUrls: ['./statebargraph.component.css']
})
export class StatebargraphComponent implements OnInit {

  public isDataFetched = false;
  constructor(private houseService: HouseService) { }
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  

  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartPlugins;

  public barChartData: ChartDataSets[];

  public StateArray: Label[] = new Array('Andaman & Nicobar', 'Andhra Pradesh', "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
  ngOnInit() {
    this.getPopulationCount().then((dataArray: number[]) => {
      console.log(dataArray);
      this.barChartLabels = this.StateArray;
      this.barChartType = 'bar';
      this.barChartLegend = true;

      this.barChartData = [
        { data: dataArray, label: 'Series A' },
      ];
      this.isDataFetched = true;
    });

  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getPopulationCount() {
    return new Promise(
      (resolve, reject) => {
        this.houseService.getStatePopulationReport().subscribe((counts) => {
          resolve(counts);
        });
      });
  }







}








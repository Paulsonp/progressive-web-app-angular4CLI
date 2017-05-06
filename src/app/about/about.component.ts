import { Component, ViewEncapsulation } from '@angular/core';


import { Population, Service } from './about.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [Service],
   encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  populationData: Population[];

    constructor(service: Service) {
        this.populationData = service.getPopulationData();
    }
 }

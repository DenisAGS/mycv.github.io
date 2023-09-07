import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha : "2018-2022",
      ubicacion: "Orizaba, ver",
      puesto: "CEO",
      empresa: "waves",
      logros:[
        {descripcion: "Dron autonomo"},
        {descripcion: "Cluster GPU"},
      ]
    };
    let work2 = {
      fecha : "2015-2018",
      ubicacion: "Ixtac, ver",
      puesto: "CEO",
      empresa: "Kubeet",
      logros:[
        {descripcion: "Cluster hadoop"},
        {descripcion: "Red Neuronal GAN"},
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}

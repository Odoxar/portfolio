import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { Smart } from '../model/smart';

@Injectable({
  providedIn: "root"
})
export class RouteProjectsService {

  constructor() {}

  getSmartHouseProjects(): Smart {
    return smartHouseProject;
  }
  getProjects(): Project[] {
    return projects;
  }

  getProjectById( id: number): Project {
    return projects[id - 1];
  }

  getProjectsLength(): number {
    return projects.length;
  }
}

const projects: Project[] = [
  {
    id: 1,
    src: "../../../assets/images/projects/1_Lesnyky/1.jpg",
    title: `projects.items.item1.title`,
    subtitle: `projects.items.item1.subtitle`,
    description: `projects.items.item1.description`,
    images: [
      {
        src: "../../../assets/images/projects/1_Lesnyky/1.jpg",
        title: 'Individual detached house, area 1000 m2. Lisnyky Kyiv region, 2018. Item 1',
        visible: true
      },
      {
        src: "../../../assets/images/projects/1_Lesnyky/2.jpg",
        title: 'Individual detached house, area 1000 m2. Lisnyky Kyiv region, 2018. Item 2',
        visible: false
      },
      {
        src: "../../../assets/images/projects/1_Lesnyky/3.jpg",
        title: 'Individual detached house, area 1000 m2. Lisnyky Kyiv region, 2018. Item 3',
        visible: false
      },
      {
        src: "../../../assets/images/projects/1_Lesnyky/4.jpg",
        title: 'Individual detached house, area 1000 m2. Lisnyky Kyiv region, 2018. Item 4',
        visible: false
      },
      {
        src: "../../../assets/images/projects/1_Lesnyky/5.jpg",
        title: 'Individual detached house, area 1000 m2. Lisnyky Kyiv region, 2018. Item 5',
        visible: false
      }
    ]
  },
  {
    id: 2,
    src: "../../../assets/images/projects/2_Kvartyra/1.jpg",
    title: `projects.items.item2.title`,
    subtitle: `projects.items.item2.subtitle`,
    description: `projects.items.item2.description`,
    images: [
      {
        src: "../../../assets/images/projects/2_Kvartyra/1.jpg",
        title: 'Residential apartment, area 100 m2. Kyiv, 2018. Item 1',
        visible: true
      },
      {
        src: "../../../assets/images/projects/2_Kvartyra/2.jpg",
        title: 'Residential apartment, area 100 m2. Kyiv, 2018. Item 2',
        visible: false
      },
      {
        src: "../../../assets/images/projects/2_Kvartyra/3.jpg",
        title: 'Residential apartment, area 100 m2. Kyiv, 2018. Item 3',
        visible: false
      },
      {
        src: "../../../assets/images/projects/2_Kvartyra/4.jpg",
        title: 'Residential apartment, area 100 m2. Kyiv, 2018. Item 4',
        visible: false
      },
      {
        src: "../../../assets/images/projects/2_Kvartyra/5.jpg",
        title: 'Residential apartment, area 100 m2. Kyiv, 2018. Item 5',
        visible: false
      }
    ]
  }
];

const smartHouseProject = {
  rows: [
    {
      content: [
        {
          title: "smart-house.rows.row1.title",
          description: "smart-house.rows.row1.description"
        }
      ],
      images: ["light.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row2.title",
          description: "smart-house.rows.row2.description1"
        },
        {
          description: "smart-house.rows.row2.description2"
        }
      ],
      images: ["climate.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row3.title",
          description: "smart-house.rows.row3.description"
        }
      ],
      images: ["curtains.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row4.title",
          description: "smart-house.rows.row4.description1"
        },
        {
          description: "smart-house.rows.row4.description2"
        }
      ],
      images: ["security1.jpg", "security2.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row5.title1",
          description: "smart-house.rows.row5.description1"
        },
        {
          title: "smart-house.rows.row5.title2",
          description: "smart-house.rows.row5.description2"
        }
      ],
      images: ["video1.jpg", "video2.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row6.title",
          description: "smart-house.rows.row6.description"
        }
      ],
      images: ["multimedia.jpg"]
    },
    {
      content: [
        {
          title: "smart-house.rows.row7.title1",
          description: "smart-house.rows.row7.description1"
        },
        {
          title: "smart-house.rows.row7.title2",
          description: "smart-house.rows.row7.description2"
        }
      ],
      images: ["scenarios.jpg"]
    }
  ],
  examples: [
    {
      title: "smart-house.examples.example1.title ",
      subtitle: "smart-house.examples.example1.subtitle",
      list: [
        "smart-house.examples.example1.list.item1",
        "smart-house.examples.example1.list.item2",
        "smart-house.examples.example1.list.item3",
        "smart-house.examples.example1.list.item4"
      ]
    },
    {
      title: "smart-house.examples.example2.title ",
      subtitle: "smart-house.examples.example2.subtitle",
      list: [
        "smart-house.examples.example2.list.item1",
        "smart-house.examples.example2.list.item2",
        "smart-house.examples.example2.list.item3"
      ]
    }
  ]
};

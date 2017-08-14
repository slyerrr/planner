// import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
//
// @Injectable()
// export class ProjectService {
//
//   constructor(public ipasHttp: Http) {
//
//   }
//
//   createProject(project) {
//     this.ipasHttp.post('http://localhost:3000/projects', {
//       "name": project.name,
//       "bookingElementPsp": project.psp,
//       "description": project.desc,
//       "cost": project.cost,
//       "start":project.startDate,
//       "end": project.endDate,
//       "owner": project.owner,
//       "country_code": project.country
//     }).subscribe(
//       data => {
//         console.log(data)
//       });
//   }
//
//   getProjects() {
//     return this.ipasHttp.get('http://localhost:3000/projects').map(res => res.json());
//   }
// }

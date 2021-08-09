import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

const dataMock = {
  "result": [
    {
      "healthIndex": 85,
      "endDate": null,
      "minValueDateTime": 1514844000,
      "type": "systemHealth",
      "cowId": 636,
      "animalId": "624",
      "eventId": 34720,
      "deletable": false,
      "lactationNumber": 4,
      "daysInLactation": 92,
      "ageInDays": 2101,
      "startDateTime": 1514844000,
      "reportingDateTime": 1514844938
    },
    {
      "healthIndex": 85,
      "endDate": null,
      "minValueDateTime": 1514844000,
      "type": "systemHealth",
      "cowId": 809,
      "animalId": "871",
      "eventId": 34719,
      "deletable": false,
      "lactationNumber": 1,
      "daysInLactation": 357,
      "ageInDays": 1075,
      "startDateTime": 1514844000,
      "reportingDateTime": 1514844929
    },
    {
      "alertType": "preCalving",
      "duration": 990,
      "originalStartDateTime": null,
      "endDateTime": null,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34718,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514842797,
      "reportingDateTime": 1514844259
    },
    {
      "healthIndex": 77,
      "endDate": null,
      "minValueDateTime": 1514840400,
      "type": "systemHealth",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34716,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514836800,
      "reportingDateTime": 1514843103
    },
    {
      "alertType": "moderatePreCalving",
      "duration": 720,
      "originalStartDateTime": null,
      "endDateTime": 1514829642,
      "daysInPregnancy": null,
      "type": "distress",
      "cowId": 910,
      "animalId": "961",
      "eventId": 34715,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 770,
      "ageInDays": 770,
      "startDateTime": 1514827932,
      "reportingDateTime": 1514829724
    },
    {
      "heatIndexPeak": "92",
      "type": "systemHeat",
      "cowId": 728,
      "animalId": "767",
      "eventId": 34717,
      "deletable": false,
      "lactationNumber": 3,
      "daysInLactation": 33,
      "ageInDays": 1468,
      "startDateTime": 1514800800,
      "reportingDateTime": 1514844320
    },
    {
      "newGroupId": 46,
      "newGroupName": "Suckling Calves",
      "currentGroupId": 0,
      "currentGroupName": null,
      "type": "changeGroup",
      "cowId": 1228,
      "animalId": "369",
      "eventId": 34702,
      "deletable": false,
      "lactationNumber": 0,
      "daysInLactation": 0,
      "ageInDays": 0,
      "startDateTime": 1514791201,
      "reportingDateTime": 1514813089
    }
  ]
}

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === "GET" && request.url === "http://localhost:4200") {
      return of(new HttpResponse({status: 200, body: dataMock}));
    }
    if (request.method === "POST" && request.url === "http://localhost:4200") {

    }
    return next.handle(request)
  }
}

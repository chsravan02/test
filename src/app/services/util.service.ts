import { Injectable } from '@angular/core';
import { Parser } from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}
  parseXML(data: any) {
    return new Promise((resolve) => {
      var k: string | number;
      let arr: any = [],
        parser = new Parser({
          trim: true,
          explicitArray: true,
        });
      parser.parseString(data, (err: any, result: any) => {
        var obj = result.persons;
        // console.log(obj);
        for (k in obj.person) {
          var item = obj.person[k];
          arr.push({
            firstName: item.firstName[0],
            id: item.id[0],
            lastName: item.lastName[0],
          });
          // console.log(item);
        }
        resolve({ person: arr });
      });
    });
  }
}

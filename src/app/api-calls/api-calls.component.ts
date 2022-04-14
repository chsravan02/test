import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Parser } from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from '../services/util.service';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';
@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.sass'],
})
export class ApiCallsComponent implements OnInit {
  xmlItems: any;
  constructor(
    private apicallservice: ApiCallService,
    private http: HttpClient,
    private utils: UtilService
  ) {}

  ngOnInit(): void {
    const api = [
      this.apicallservice.getJsonResponse(),
      this.apicallservice.getXmlResponse(),
    ];
    forkJoin(api).subscribe(([jsonResponse, xmlresponse]) => {
      this.utils.parseXML(xmlresponse).then((data: any) => {
        this.xmlItems = _.sortBy(
          [...data.person, ...jsonResponse.person],
          'id'
        );
      });
    });
    console.log(this.xmlItems);
    /* 
    this.apicallservice.getJsonResponse() */
  }
}

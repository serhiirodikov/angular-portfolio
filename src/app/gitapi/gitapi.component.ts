import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';

export interface GitInfo {
  avatar_url: string;
  id: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-gitapi',
  templateUrl: './gitapi.component.html',
  styleUrls: ['./gitapi.component.css'],
  providers: [GitInfoService],
})
export class GitapiComponent implements OnInit {
  constructor(private gitinfoService: GitInfoService) {}

  gitInfo: GitInfo;

  ngOnInit(): void {
    this.gitinfoService.getUserInfo().subscribe((response: GitInfo) => {
      console.log(response);
      this.gitInfo = response;
    });
  }
}

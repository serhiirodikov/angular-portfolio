import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';

export interface GitInfo {
  avatar_url: string;
  id: number;
  name: string;
  url: string;
  location: string;
  public_repos: number;
  created_at: string;
  email: string;
  public_gists: number;
  followers: number;
  following: number;
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
  repos: any;
  ngOnInit(): void {
    this.gitinfoService.getUserInfo().subscribe((response: GitInfo) => {
      this.gitInfo = response;
    });
    this.gitinfoService.getRepos().subscribe((response) => {
      this.repos = response;
    });
  }
}

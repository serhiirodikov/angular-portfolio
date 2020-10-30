import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';
import { obj, skills } from '../mocks/mock';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [GitInfoService],
})
export class AboutComponent implements OnInit {
  constructor(private gitInfoServ: GitInfoService) {}
  objs = obj;
  skills = skills;

  photo: string;
  ngOnInit(): any {
    this.gitInfoServ.getUserInfo().subscribe((response) => {
      this.photo = response.avatar_url;
    });
  }
}

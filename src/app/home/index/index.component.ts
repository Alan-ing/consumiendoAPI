import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NewsletterService } from '../../services/newsletter.service';



@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  newsletter: any = [
    {
      img: 'assets/index/facebook.png',
      createdAt: 'facebook premier',
      name: 'level Agency Partner',
    },
  ];

  constructor(public newsletterService: NewsletterService) { }


  ngOnInit() {
    this.getNewsletter();
  }
  getNewsletter() {
    this.newsletterService.getNewsletter().subscribe((res) => {
      console.log(res);
      this.newsletter = res;
    });
  }

  createRandomNewsletter() {
    let obj = {};

    this.newsletterService.createRandomNewsletter(obj).subscribe((res) => {
      this.getNewsletter();
    });
  }

  deleteNewsletter(id: string) {
    this.newsletterService.deleteNewsletter(id).subscribe((res) => {
      this.getNewsletter();
    });
  }
}

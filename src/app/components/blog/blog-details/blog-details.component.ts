import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {BlogComponent} from '../blog.component';
import {DataServiceService} from '../../../services/data-service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

    post: any;
    constructor(private route: ActivatedRoute, private DataServiceService : DataServiceService ) { }

    ngOnInit() {
        this.DataServiceService .getPost(this.route.params['id']).subscribe( (data) => {
            this.post = data;
        });
    }

  }

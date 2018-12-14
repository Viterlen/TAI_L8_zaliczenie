import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    @Input() filterText: string;
    public list;
    constructor(private dataServiceService: DataServiceService) {
    this.dataServiceService.getAll().subscribe(results => {
        this.list = results;
    });
    }

    ngOnInit(): void {}
}

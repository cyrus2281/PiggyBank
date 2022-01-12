import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { Directory } from '../../models/directory';
import { DirectoryDataService } from '../../services/directory-data.service';

@Component({
  selector: 'pg-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit, OnDestroy {
  directory!: Directory;

  subscriptions = new SubSink();

  constructor(private directoryDataService: DirectoryDataService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.directoryDataService.getSelectedDirectory().subscribe(directory => {
        this.directory = directory
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

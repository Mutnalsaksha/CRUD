import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  confirmDelete() {
    // Add your delete logic here
    console.log('Employee deleted successfully.');
  }

  cancelDelete() {
    // Add logic to navigate back or handle cancellation
    console.log('Delete operation cancelled.');
  }

}

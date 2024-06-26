import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationsService: ReservationService) {}

  ngOnInit(): void {
    this.updateReservations();
  }

  updateReservations() {
    this.reservationsService.getReservations().subscribe((res) => {
      this.reservations = res;
    });
  }

  deleteReservation(id: string) {
    this.reservationsService.deleteReservation(id).subscribe(() => {
      alert('Deleting reservation processed!');
      this.updateReservations();
    });
  }
}

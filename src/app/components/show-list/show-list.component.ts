import { Component, EventEmitter, Input, Output} from '@angular/core';
import { NgFor } from '@angular/common';
import { Show } from '../../interfaces/show.interface';
import { ShowCardComponent } from '../show-card/show-card.component';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [ShowCardComponent, NgFor,],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})

export class ShowListComponent {
  @Output()
  public deleteCard: EventEmitter<string> = new EventEmitter();

  @Input()
  public shows: Show[] = [];

  @Output() editCard = new EventEmitter<Show>(); 

  public deleteElement(name: string): void {
    this.deleteCard.emit(name);
  }
  public editShow(show: Show): void {
    console.log("HEloooo")
    this.editCard.emit(show); 
  }
}


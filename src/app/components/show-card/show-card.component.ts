import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})

export class ShowCardComponent {
  @Output()
  public deleteCard: EventEmitter<string> = new EventEmitter();
  @Output() editCard = new EventEmitter<Show>();
  @Input()
  public show: Show = {
    name: "",
    description: "",
    image: "",
    year: 0,
    episodes: 0,
    genre: "",
    likes: [],
  };

  public isSelected: boolean = false;

  public changeSelected(): void {
    this.isSelected = !this.isSelected
  }

  public onDeleteCard(){
    this.deleteCard.emit(this.show.name);
  }

  public editShow(show: Show): void {
    this.editCard.emit(show);
  }
}

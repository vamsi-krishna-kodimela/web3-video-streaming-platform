import { DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [FormsModule, DecimalPipe, NgClass],
  templateUrl: './player.component.html',
  styleUrl: './player.component.less',
})
export class PlayerComponent {
  onload() {
    setTimeout(() => {
      this.isLoadingCompleted = true;
    }, 1000);
  }
  isLoadingCompleted: boolean = false;
}

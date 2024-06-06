import { Component } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";

@Component({
    selector: 'app-player-screen',
    standalone: true,
    templateUrl: './player-screen.component.html',
    styleUrl: './player-screen.component.less',
    imports: [PlayerComponent]
})
export class PlayerScreenComponent {

}

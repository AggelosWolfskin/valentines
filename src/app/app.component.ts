import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValentinePromptComponent } from './components/valentine-prompt/valentine-prompt.component';
import { CelebrationComponent } from './components/celebration/celebration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ValentinePromptComponent, CelebrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valentine';
  showCelebration = false;

  onYesClicked() {
    this.showCelebration = true;
  }
}

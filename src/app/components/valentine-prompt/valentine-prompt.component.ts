import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine-prompt.component.html',
  styleUrl: './valentine-prompt.component.css'
})
export class ValentinePromptComponent {
  @Output() yesClicked = new EventEmitter<void>();

  yesButtonScale = 1;
  noButtonX = 0;
  noButtonY = 0;
  moveCount = 0;
  maxMoves = 5;
  noButtonTransformed = false;
  useFixedPositioning = false;

  ngOnInit() {
    // Start in normal flex layout
  }

  onNoButtonHover() {
    if (this.noButtonTransformed) return;

    // Switch to fixed positioning on first hover
    if (!this.useFixedPositioning) {
      this.useFixedPositioning = true;
      // Get current position of No button from DOM
      const noButton = document.querySelector('.no-button') as HTMLElement;
      if (noButton) {
        const rect = noButton.getBoundingClientRect();
        this.noButtonX = rect.left;
        this.noButtonY = rect.top;
      }
    }

    this.moveCount++;
    this.yesButtonScale += 0.15;

    if (this.moveCount >= this.maxMoves) {
      this.noButtonTransformed = true;
      return;
    }

    // Generate random position
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 50;

    this.noButtonX = Math.random() * maxX;
    this.noButtonY = Math.random() * maxY;

    // Ensure button stays within viewport
    if (this.noButtonX < 0) this.noButtonX = 0;
    if (this.noButtonY < 0) this.noButtonY = 0;
    if (this.noButtonX + 120 > window.innerWidth) this.noButtonX = window.innerWidth - 120;
    if (this.noButtonY + 50 > window.innerHeight) this.noButtonY = window.innerHeight - 50;
  }


  onYesClick() {
    this.yesClicked.emit();
  }

  getForcedYesText(): string {
    const texts = [
      'You Have No Choice! 😄',
      'No Way Out! 💕',
      'Destiny Says Yes! ✨'
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  }
}

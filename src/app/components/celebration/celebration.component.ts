import { Component, AfterViewInit } from '@angular/core';

interface Confetti {
  element: HTMLElement;
  left: number;
  startTime: number;
  duration: number;
  swing: number;
}

@Component({
  selector: 'app-celebration',
  standalone: true,
  imports: [],
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.css'
})
export class CelebrationComponent implements AfterViewInit {
  private confettiPieces: Confetti[] = [];
  private animationId: number | null = null;

  ngAfterViewInit() {
    setTimeout(() => {
      this.createConfetti();
    }, 100);
  }

  createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) {
      console.error('Confetti container not found!');
      return;
    }

    const hearts = ['❤️', '💕', '💖', '💗', '💓'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');

      const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
      const randomLeft = Math.random() * window.innerWidth;
      const randomDelay = Math.random() * 0.3;
      const randomDuration = 2.5 + Math.random() * 1.5;
      const randomSize = 20 + Math.random() * 25;
      const randomSwing = Math.random() * 80 - 40; // -40 to 40

      confetti.textContent = randomHeart;
      confetti.style.position = 'fixed';
      confetti.style.left = randomLeft + 'px';
      confetti.style.top = '-40px';
      confetti.style.fontSize = randomSize + 'px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '999';
      confetti.style.willChange = 'transform, opacity';

      container.appendChild(confetti);

      this.confettiPieces.push({
        element: confetti,
        left: randomLeft,
        startTime: Date.now() + randomDelay * 1000,
        duration: randomDuration * 1000,
        swing: randomSwing
      });
    }

    this.animateConfetti();
    console.log('Confetti created:', confettiCount);
  }

  private animateConfetti() {
    const animate = () => {
      const now = Date.now();
      let hasActive = false;

      for (const piece of this.confettiPieces) {
        const elapsed = now - piece.startTime;

        if (elapsed < 0) continue; // Haven't started yet
        if (elapsed > piece.duration) {
          piece.element.remove();
          continue;
        }

        hasActive = true;
        const progress = elapsed / piece.duration;

        const yPos = (window.innerHeight + 40) * progress;
        const xOffset = Math.sin(progress * Math.PI * 3) * piece.swing;
        const rotation = progress * 360;
        const opacity = Math.max(0, 1 - progress * 0.3);

        piece.element.style.transform = `translate(${xOffset}px, ${yPos}px) rotate(${rotation}deg)`;
        piece.element.style.opacity = opacity.toString();
      }

      if (hasActive) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        this.animationId = null;
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }
}

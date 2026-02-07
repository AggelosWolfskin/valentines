# Valentine's Day Interactive Web Project - Implementation Plan

## 📋 Project Overview
A fun, interactive web application to ask someone to be your Valentine with:
- Romantic image display
- Interactive "Yes/No" buttons with playful behavior
- "No" button that evades clicks
- "Yes" button that grows progressively larger
- Celebration screen with a second image after "Yes" is clicked

## 🎯 Technology Stack

### Frontend
- **Framework**: Angular with TypeScript
- **Styling**: CSS (custom or TailwindCSS for quick styling)
- **Deployment**: GitHub Pages (static hosting)

### Backend
- **None required** - This is a pure client-side application with no backend integration

## 📁 Project Structure

```
valentine/
├── README.md
├── package.json
├── angular.json
├── tsconfig.json
├── .gitignore
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css (global styles)
│   ├── favicon.ico
│   └── app/
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.css
│       └── app.module.ts
├── assets/
│   ├── romantic-image.jpg (user provided)
│   └── celebration-image.jpg (user provided)
└── dist/ (build output for deployment)
```

## 🎮 Feature Implementation Breakdown

### 1. Initial Screen (Main Question)
- Display romantic image centered
- Display text "Will you be my Valentine?" above buttons
- Two buttons side by side: "Yes" and "No"
- Initial "Yes" button at normal size
- "No" button positioned statically

### 2. "No" Button Behavior
- **Hover Detection**: When user hovers near or clicks the "No" button
- **Escape Logic**: Button jumps to a random position on screen
- **Constraints**: Keep button within viewport bounds
- **Evasion Timeout**: Optional - stop evading after X attempts or time period
- **Fallback**: Eventually disable button or make it unclickable

### 3. "Yes" Button Behavior
- **Progressive Growth**: Increase size with each "No" button attempt
- **Growth Options**:
  - Option A: Grow by fixed amount each time button is approached
  - Option B: Grow continuously over time
  - Option C: Both - grow on No attempts + continuously
- **Max Size**: Define reasonable maximum size to prevent overflow
- **Visual Feedback**: Add subtle animations/scale transitions

### 4. Celebration Screen (After "Yes" Click)
- Hide initial content
- Display celebration image centered
- **Add confetti animation** (particles falling from top)
- **Add congratulatory text** (e.g., "Yay! You made the right choice! ❤️")
- Optional: Add a restart button to ask again

## 🛠️ Implementation Steps

### Phase 1: Project Setup
1. [ ] Initialize Angular project with `ng new valentine`
2. [ ] Remove default Angular boilerplate
3. [ ] Set up GitHub Pages configuration
4. [ ] Configure angular.json for GitHub Pages deployment

### Phase 2: Component Structure
1. [ ] Create main AppComponent
2. [ ] Create child components:
   - QuestionComponent (initial screen)
   - CelebrationComponent (success screen)
3. [ ] Set up component communication/state management

### Phase 3: UI Implementation
1. [ ] Design responsive layout
2. [ ] Style "Yes" button (initial state)
3. [ ] Style "No" button (initial state)
4. [ ] Style text and image containers
5. [ ] Add hover/click visual feedback

### Phase 4: Interactive Behaviors
1. [ ] Implement "No" button hover/proximity detection (NOT clickable)
2. [ ] Add random position generator (keeps in viewport)
3. [ ] Implement evasion animation on hover/proximity
4. [ ] Add counter for "No" movement events
5. [ ] Implement "Yes" button growth logic
   - Scale factor increases with each "No" movement
   - Define max size threshold (e.g., when "Yes" reaches this size)
6. [ ] Add smooth scale animations (CSS transforms)
7. [ ] **SPECIAL**: When "Yes" reaches max size:
   - Hide "No" button
   - Replace with a second "Yes" button with humorous text (e.g., "You have no choice!")
   - Trigger celebration screen when either "Yes" is clicked

### Phase 5: State Management
1. [ ] Track button click/hover attempts
2. [ ] Toggle between QuestionComponent and CelebrationComponent
3. [ ] Manage button sizes and positions

### Phase 6: Assets & Media
1. [ ] Create assets folder structure
2. [ ] Accept user's romantic image (rename to romantic-image.jpg)
3. [ ] Accept user's celebration image (rename to celebration-image.jpg)
4. [ ] Optimize images for web (compress if needed)

### Phase 7: Styling & Polish
1. [ ] Add responsive design for mobile
2. [ ] Ensure buttons work on touch devices
3. [ ] Add smooth transitions and animations
4. [ ] Test text legibility over images
5. [ ] Add favicon (optional Valentine's emoji or custom)

### Phase 8: Deployment
1. [ ] Build for production: `ng build --configuration production`
2. [ ] Configure GitHub Pages in repository settings
3. [ ] Push to GitHub main/master branch
4. [ ] Verify live deployment at `https://username.github.io/valentine/`

## 📝 Key Technical Decisions (FINALIZED)

### Decision 1: Growth Mechanism ✅
- **CHOSEN**: "Yes" button grows **whenever the "No" button is moved**
- Growth trigger: Hover/proximity detection on "No" button
- Each movement event increases "Yes" button size by fixed increment

### Decision 2: "No" Button Behavior ✅
- **CHOSEN**: "No" button is **NOT clickable**
- Behavior: Moves away on hover/proximity detection
- **Funny escalation**: When "Yes" reaches maximum size → "No" button transforms into another "Yes" button
- Creates hilarious "forced yes" scenario

### Decision 3: Celebration Screen ✅
- **CHOSEN**: Display with **confetti animation + congratulations text**
- Celebration image centered
- Confetti particle effects
- Congratulatory message
- Optional: Restart button to ask again

### Decision 4: Image Assets ✅
- **User will provide images later**
- Create placeholder structure now
- Assets folder ready to accept: `romantic-image.*` and `celebration-image.*`
- Support JPG, PNG, WebP formats

### Mobile Experience
- **Hover vs Touch**: Touch devices don't have hover events
- **Solution**: Use both `@mouseenter`/`@touchstart` events for button proximity
- **Button Size**: Ensure "Yes" button doesn't overflow on mobile when scaled

### Animation Approach
- **CSS Animations**: Smooth, performant (for button movement and scaling)
- **TypeScript Logic**: Handle position calculation and size growth
- **Confetti**: Use lightweight library or pure CSS/Canvas animation

## 🚀 Deployment Steps for GitHub

1. Create GitHub repository (e.g., `valentine`)
2. In repository settings → Pages:
   - Source: Deploy from a branch
   - Branch: main/master
   - Folder: /docs (or root if using Angular's default dist)
3. Configure `angular.json`:
   ```json
   "baseHref": "/valentine/"
   ```
4. Build and copy dist to docs folder OR configure output path
5. Commit and push to GitHub
6. Site will be live at: `https://<username>.github.io/valentine/`

## 🎨 CSS/Styling Strategy

```css
/* Button positioning and sizing */
.button-container {
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.no-button {
  position: absolute; /* Allows free movement */
  transition: all 0.3s ease; /* Smooth animation */
}

.yes-button {
  position: relative; /* Static growth */
  transition: transform 0.3s ease;
  transform: scale(1); /* Grows via scale() */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Mobile-specific styles */
}
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "@angular/animations": "latest",
    "@angular/common": "latest",
    "@angular/compiler": "latest",
    "@angular/core": "latest",
    "@angular/forms": "latest",
    "@angular/platform-browser": "latest",
    "@angular/platform-browser-dynamic": "latest",
    "rxjs": "latest",
    "tslib": "latest",
    "zone.js": "latest"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "latest",
    "@angular/cli": "latest",
    "@angular/compiler-cli": "latest",
    "typescript": "latest"
  }
}
```

## ✨ Optional Enhancements

- [ ] Confetti animation on "Yes" click
- [ ] Celebratory message text
- [ ] Sound effects (upbeat music on "Yes")
- [ ] Restart button on celebration screen
- [ ] Multiple "No" button positions (not just 1)
- [ ] Difficulty scaling (harder to catch "No" button)
- [ ] Dark mode toggle
- [ ] Easter eggs (click on images, etc.)

## 🎯 Success Criteria

- [x] Clean, romantic presentation
- [x] "No" button evades clicks smoothly
- [x] "Yes" button grows progressively
- [x] Responsive design works on mobile/tablet
- [x] Celebration screen displays after "Yes"
- [x] Deployable to GitHub Pages with simple git push
- [x] No backend server required
- [x] Fast load times
- [x] Fun and playful user experience

## 📞 Next Steps

1. **Approve Plan**: Review and approve this implementation plan
2. **Provide Images**: Supply the romantic image and celebration image
3. **Start Implementation**: Create Angular project and begin Phase 1
4. **Create GitHub Repo**: Set up repository with GitHub Pages enabled
5. **Deploy**: Push to GitHub Pages for sharing with your girlfriend

---

**Notes for Implementation:**
- All interactive logic will be in TypeScript (type-safe)
- Use Angular's data binding for reactive UI updates
- Keep components simple and focused
- Test on multiple devices (especially mobile/tablet)
- Images should be optimized (JPG/WebP format)

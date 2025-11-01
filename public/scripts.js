// Wait for GSAP to load
function initGSAPAnimation() {
  const parts = document.querySelectorAll(".part");
  let currentIndex = 0;
  parts.forEach(item=>{
    item.style.position="absolute";
    item.style.top="50%";
    item.style.left="50%";
    item.style.transform="translate(-50%, -50%)";
  })
  // Initialize: Set all parts to be hidden except the first one
  gsap.set(parts, {
    scale: 0,
    display: "none",
  });

  // Show first part with animation
  gsap.set(parts[0], { display: "block" });
  gsap.to(parts[0], {
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
  });

  function animateToPart(index) {
    // Don't animate if we're already at this part or currently animating
    if (index === currentIndex) return;
    const currentPart = parts[currentIndex];
    const nextPart = parts[index];

    // Set animating flag
    isAnimating = true;

    if (currentIndex < index) {
      // Moving forward - current part scales up and fades out
      gsap.to(currentPart, {
        scale: 5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(currentPart, { scale: 0, display: "none", opacity: 1 });
        },
      });

      // Animate next part in
      gsap.set(nextPart, { display: "block", scale: 0 });
      gsap.to(nextPart, {
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          isAnimating = false;
        },
      });
    } else {
      // Moving backward - current part scales down
      gsap.to(currentPart, {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(currentPart, { display: "none" });
        },
      });

      // Animate next part in
      gsap.set(nextPart, { display: "block", scale: 5, opacity: 0 });
      gsap.to(nextPart, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          isAnimating = false;
        },
      });
    }

    currentIndex = index;
    console.log(`Current part: ${currentIndex + 1}/${parts.length}`);
  }

  // Variables for touch handling
  let touchStartY = 0;
  let touchEndY = 0;
  let isAnimating = false;

  // Handle wheel events (desktop)
  function handleWheel(event) {
    // event.preventDefault();
    if (isAnimating) return;

    const delta = event.deltaY;
    let nextIndex = currentIndex;

    if (delta > 0) {
      // Scrolling down - move to next part
      nextIndex = Math.min(currentIndex + 1, parts.length - 1);
    } else if (delta < 0) {
      // Scrolling up - move to previous part
      nextIndex = Math.max(currentIndex - 1, 0);
    }
    if (nextIndex !== currentIndex) {
      isAnimating = true;
      animateToPart(nextIndex);
      setTimeout(() => {
        isAnimating = false;
      }, 800); // Duration of animation
    }
  }

  // Handle touch events (mobile)
  function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    if (isAnimating) return;

    touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    // Minimum swipe distance (adjust as needed)
    const minSwipeDistance = 50;

    if (Math.abs(deltaY) > minSwipeDistance) {
      let nextIndex = currentIndex;

      if (deltaY > 0) {
        // Swipe up - move to next part
        nextIndex = Math.min(currentIndex + 1, parts.length - 1);
      } else {
        // Swipe down - move to previous part
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      // if (nextIndex !== currentIndex) {
      isAnimating = true;
      animateToPart(nextIndex);
      setTimeout(() => {
        isAnimating = false;
      }, 800); // Duration of animation
      // }
    }
  }

  // Add event listeners for both desktop and mobile
  addEventListener("wheel", handleWheel);
  addEventListener("touchstart", handleTouchStart, { passive: false });
  addEventListener("touchend", handleTouchEnd, { passive: false });
}

// Prevent default touch behaviors
// Limit global touch prevention to non-interactive areas on the homepage
function isInteractiveTarget(target) {
  return !!target.closest(
    "a, button, input, textarea, select, [role=button], [contenteditable=true]"
  );
}

function isHomepage() {
  return document.querySelector(".homepage") != null;
}

document.addEventListener(
  "touchstart",
  function (e) {
    if (!isHomepage()) return; // only on homepage
    if (isInteractiveTarget(e.target)) return; // don't block links/inputs/buttons
    // e.preventDefault(); // usually not needed on touchstart
  },
  { passive: true }
);

document.addEventListener(
  "touchmove",
  function (e) {
    if (!isHomepage()) return;
    if (isInteractiveTarget(e.target)) return;
    e.preventDefault();
  },
  { passive: false }
);

document.addEventListener(
  "touchend",
  function (e) {
    if (!isHomepage()) return;
    if (isInteractiveTarget(e.target)) return;
    // don't block touchend by default; only specific logic below may prevent
  },
  { passive: true }
);

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    if (!isHomepage()) return;
    if (isInteractiveTarget(event.target)) return;
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  { passive: false }
);

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGSAPAnimation);
} else {
  initGSAPAnimation();
}

"use client";

import { useEffect } from "react";

export function Oneko() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user prefers reduced motion
    const isReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)")?.matches === true;
    if (isReducedMotion) return;

    const nekoEl = document.createElement("div");
    const persistPosition = true;

    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;

    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let isForcedSleep = false;

    const nekoSpeed = 10;
    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function setSprite(name: string, frame: number) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // every ~ 20 seconds
      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        const avalibleIdleAnimations = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) {
          avalibleIdleAnimations.push("scratchWallW");
        }
        if (nekoPosY < 32) {
          avalibleIdleAnimations.push("scratchWallN");
        }
        if (nekoPosX > window.innerWidth - 32) {
          avalibleIdleAnimations.push("scratchWallE");
        }
        if (nekoPosY > window.innerHeight - 32) {
          avalibleIdleAnimations.push("scratchWallS");
        }
        idleAnimation =
          avalibleIdleAnimations[
            Math.floor(Math.random() * avalibleIdleAnimations.length)
          ];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            if (isForcedSleep) {
              idleAnimationFrame = 8; // Loop sleep animation indefinitely
            } else {
              resetIdleAnimation();
            }
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      if (isForcedSleep) {
        idleAnimation = "sleeping";
        idle();
        return;
      }

      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        // count down after being alerted before moving
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.left = `${nekoPosX - 26}px`;
      nekoEl.style.top = `${nekoPosY - 26}px`;
    }

    // Init
    const nekoFile = "/images/miko-sprites.png";

    if (persistPosition) {
      try {
        const storedNeko = JSON.parse(window.localStorage.getItem("oneko") || "null");
        if (storedNeko !== null) {
          nekoPosX = storedNeko.nekoPosX ?? 32;
          nekoPosY = storedNeko.nekoPosY ?? 32;
          mousePosX = storedNeko.mousePosX ?? 0;
          mousePosY = storedNeko.mousePosY ?? 0;
          frameCount = storedNeko.frameCount ?? 0;
          idleTime = storedNeko.idleTime ?? 0;
          isForcedSleep = storedNeko.isForcedSleep ?? false;
          idleAnimation = storedNeko.idleAnimation ?? null;
          idleAnimationFrame = storedNeko.idleAnimationFrame ?? 0;
          nekoEl.style.backgroundPosition = storedNeko.bgPos ?? "";
        }
      } catch (e) {
        console.error("Error reading oneko state", e);
      }
    }

    if (isForcedSleep && !idleAnimation) {
      idleAnimation = "sleeping";
      idleAnimationFrame = 8;
    }

    nekoEl.id = "oneko";
    nekoEl.setAttribute("aria-hidden", "true");
    nekoEl.title = "Double-click Neko to sleep / wake up";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.padding = "10px"; // Expand interactive hitbox to 52x52px
    nekoEl.style.boxSizing = "content-box";
    nekoEl.style.backgroundRepeat = "no-repeat";
    nekoEl.style.backgroundOrigin = "content-box";
    nekoEl.style.backgroundClip = "content-box";
    nekoEl.style.userSelect = "none";
    nekoEl.style.webkitUserSelect = "none";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "auto";
    nekoEl.style.cursor = "pointer";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 26}px`;
    nekoEl.style.top = `${nekoPosY - 26}px`;
    nekoEl.style.zIndex = "99999";
    nekoEl.style.backgroundImage = `url(${nekoFile})`;
    
    document.body.appendChild(nekoEl);

    // Track clicks manually to support touch screens and avoid OS double-click timing issues
    let lastClickTime = 0;
    nekoEl.addEventListener("click", () => {
      const now = Date.now();
      if (now - lastClickTime < 300) {
        isForcedSleep = !isForcedSleep;
        if (isForcedSleep) {
          idleAnimation = "sleeping";
          idleAnimationFrame = 0;
        } else {
          resetIdleAnimation();
        }
        lastClickTime = 0;
      } else {
        lastClickTime = now;
      }
    });

    const handleMouseMove = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    let lastFrameTimestamp = 0;
    let animationFrameId = 0;

    function onAnimationFrame(timestamp: number) {
      if (!nekoEl.isConnected) {
        return;
      }
      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }
      animationFrameId = window.requestAnimationFrame(onAnimationFrame);
    }

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    const handleBeforeUnload = () => {
      if (persistPosition) {
        try {
          window.localStorage.setItem("oneko", JSON.stringify({
            nekoPosX,
            nekoPosY,
            mousePosX,
            mousePosY,
            frameCount,
            idleTime,
            isForcedSleep,
            idleAnimation,
            idleAnimationFrame,
            bgPos: nekoEl.style.backgroundPosition
          }));
        } catch (e) {
          console.error("Error saving oneko state", e);
        }
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (nekoEl.parentNode) {
        nekoEl.parentNode.removeChild(nekoEl);
      }
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * Replays the hero entrance animations when the page is restored from the
 * browser's back/forward cache (bfcache). Restored pages keep their finished
 * animation state, so without this the hero appears with no entrance.
 */
export default function HeroAnimationReplay() {
    useEffect(() => {
        function onPageShow(event: PageTransitionEvent) {
            if (!event.persisted) return;
            document
                .querySelectorAll<HTMLElement>(".anim-rise, .anim-bowl, .anim-fade")
                .forEach((el) => {
                    el.style.animation = "none";
                    void el.offsetWidth; // force reflow so the animation restarts
                    el.style.animation = "";
                });
        }

        window.addEventListener("pageshow", onPageShow);
        return () => window.removeEventListener("pageshow", onPageShow);
    }, []);

    return null;
}

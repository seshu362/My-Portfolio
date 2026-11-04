import React, { useRef, useState, useEffect } from 'react';
import { Lock, ExternalLink, Maximize2, ArrowDownUp } from 'lucide-react';

export default function LaptopFrame({
  image,
  alt = 'Project Screen Preview',
  url = '',
  title = '',
  className = '',
  onExpand = null,
}) {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const animationFrameRef = useRef(null);
  const userInteractedRef = useRef(false);

  // Clean domain display from URL
  const domain = url
    ? url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'secure-preview.local';

  // Smooth Auto-Scroll on Hover (Glides down on hover, returns smoothly on leave)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (isHovered && !userInteractedRef.current) {
      const scrollStep = () => {
        if (!container) return;
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (container.scrollTop < maxScroll && !userInteractedRef.current) {
          container.scrollTop += 1.3; // Smooth cinematic scroll
          animationFrameRef.current = requestAnimationFrame(scrollStep);
        }
      };
      animationFrameRef.current = requestAnimationFrame(scrollStep);
    } else if (!isHovered) {
      userInteractedRef.current = false;
      // Smoothly return to top when mouse leaves
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  // When user manually scrolls with wheel or touch
  const handleWheel = () => {
    userInteractedRef.current = true;
    if (!hasScrolled) setHasScrolled(true);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center select-none group/laptop ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Laptop Display Lid & Outer Bezel */}
      <div className="w-full bg-[#1A1A1E] border-[1.5px] border-[#383842] rounded-t-xl sm:rounded-t-2xl pt-2 sm:pt-2.5 px-2 sm:px-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative">
        {/* Top Bezel with Webcam */}
        <div className="w-full flex justify-center items-center pb-1.5 sm:pb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0D0D10] border border-[#2D2D35] flex items-center justify-center">
            <span className="w-0.5 h-0.5 rounded-full bg-[#3B82F6]/60"></span>
          </div>
        </div>

        {/* 2. System Browser Screen Frame */}
        <div className="w-full bg-[#111114] rounded-t-lg overflow-hidden border border-white/10 flex flex-col shadow-inner">
          {/* macOS Browser Header Bar */}
          <div className="w-full bg-[#18181C] border-b border-white/10 px-2.5 sm:px-3 py-1.5 flex items-center justify-between gap-2 z-10 relative">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block"></span>
            </div>

            {/* URL / Domain Bar */}
            <div className="flex-1 max-w-[280px] sm:max-w-[340px] bg-[#0E0E12] border border-white/10 rounded-md px-2.5 py-0.5 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#D7E2EA]/70 truncate">
              <Lock size={10} className="text-emerald-400 flex-shrink-0" />
              <span className="truncate">{domain}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 flex-shrink-0 text-[#D7E2EA]/50">
              {onExpand && (
                <button
                  type="button"
                  onClick={onExpand}
                  className="p-1 hover:text-white transition-colors"
                  title="Expand preview"
                >
                  <Maximize2 size={11} />
                </button>
              )}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-purple-300 transition-colors"
                  title="Open live link"
                >
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>

          {/* 3. Smooth Scrollable Webpage Viewport */}
          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            onTouchMove={handleWheel}
            className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[310px] bg-[#09090B] overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(182,0,168,0.5)_transparent] cursor-ns-resize"
          >
            {image ? (
              <img
                src={image}
                alt={alt}
                className="w-full h-auto block"
                loading="lazy"
                draggable="false"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-[#D7E2EA]/40 font-mono">
                No Preview Available
              </div>
            )}

            {/* Interactive Scroll Guide Badge (fades when hovered/scrolled) */}
            <div
              className={`absolute bottom-2.5 right-2.5 pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-85'
              }`}
            >
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-sm text-[10px] font-mono text-[#D7E2EA]/80 shadow-md">
                <ArrowDownUp size={10} className="text-purple-400 animate-pulse" />
                <span>Scroll or Hover to view</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Laptop Base Chassis & Display Hinge Notch */}
      <div className="w-[104%] sm:w-[105%] h-3 sm:h-3.5 bg-gradient-to-b from-[#2B2B32] via-[#202026] to-[#141418] rounded-b-lg sm:rounded-b-xl border-t border-[#3F3F4A] shadow-[0_12px_30px_rgba(0,0,0,0.9)] flex justify-center items-start relative -mt-[1px]">
        {/* Thumb Opening Notch */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#121216] rounded-b-md border-b border-white/5"></div>
      </div>
    </div>
  );
}

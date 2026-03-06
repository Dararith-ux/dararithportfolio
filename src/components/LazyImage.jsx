import React, { useState, useRef, useEffect } from "react";

const loadedImageCache = new Set();

const LazyImage = ({
  src,
  alt,
  wrapperClassName = "",
  imgClassName = "",
  placeholderClassName = "",
  onError,
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(() => loadedImageCache.has(src));
  const [isInView, setIsInView] = useState(() => loadedImageCache.has(src));
  const imgRef = useRef(null);

  useEffect(() => {
    const isCached = loadedImageCache.has(src);
    setIsLoaded(isCached);
    setIsInView(isCached);
  }, [src]);

  useEffect(() => {
    if (loadedImageCache.has(src)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  const handleLoad = () => {
    loadedImageCache.add(src);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && (
        <div
          className={`absolute inset-0 animate-pulse ${
            placeholderClassName || "bg-gray-800/60"
          }`}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
          onLoad={handleLoad}
          onError={onError}
          loading="eager"
          decoding="async"
          {...imgProps}
        />
      )}
    </div>
  );
};

export default LazyImage;

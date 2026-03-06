import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({
  src,
  alt,
  wrapperClassName = "",
  imgClassName = "",
  placeholderClassName = "",
  onError,
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
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
  }, []);

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
          onLoad={() => setIsLoaded(true)}
          onError={onError}
          loading="lazy"
          decoding="async"
          {...imgProps}
        />
      )}
    </div>
  );
};

export default LazyImage;

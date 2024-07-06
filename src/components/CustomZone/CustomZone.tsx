import React, { useState, useCallback } from 'react';

interface CustomZoneProps {
  onDrop: (files: File[]) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  draggingStyle?: React.CSSProperties;
}

const CustomZone: React.FC<CustomZoneProps> = ({ onDrop, className, style, draggingStyle, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      setIsDragging(false);

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        onDrop(Array.from(event.dataTransfer.files));
        event.dataTransfer.clearData();
      }
    },
    [onDrop]
  );

  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        ...(isDragging ? draggingStyle : {}),
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children ? children : <p>Drag & drop files here, or click to select files</p>}
    </div>
  );
};

export default CustomZone;
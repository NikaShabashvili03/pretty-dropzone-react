import React, { useState, useCallback } from 'react';
import './DropZone.module.css';


interface DropzoneProps {
  onDrop: (files: File) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, style, className, children }) => {
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

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0){
        onDrop(event.dataTransfer.files[0]);
        event.dataTransfer.clearData();
      }
    },
    [onDrop]
  );

  return (
    <div
      className={`${className} dropzone ${isDragging ? "dragging" : ""}`}
      style={style}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children ? children : <p>Drag & drop files here, or click to select files</p>}
    </div>
  );
};

export default Dropzone;
import React from 'react';
import './FileMozaic.module.css'

interface FileMosaicProps {
  file: File,
  notFileText?: string,
  className?: string,
  style?: React.CSSProperties;
}


const FileMosaic: React.FC<FileMosaicProps> = ({ file, notFileText, style, className }) => {
  const url = URL.createObjectURL(file);
  
  const renderPreview = () => {
    if (file.type.startsWith('image/')) {
        return <img style={style} className={className} src={url} alt={file.name}/>;
    } else {
        return <div style={style} className={`nonFile ${className}`}>
           <p>{notFileText ? notFileText : file.name}</p>
        </div>;
    }
  };

  return (
    <div>
        {renderPreview()}
    </div>
  );
};

export default FileMosaic;
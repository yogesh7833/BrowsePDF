import React, { useEffect, useState } from 'react'

const PDFItem = ({ pdf, onSelectPdf }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('/default-thumbnail.png');
    const renderThumbnail = async (url, setThumbnailUrl) => {
        try {
          const pdf = await pdfjsLib.getDocument(url).promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise;
          setThumbnailUrl(canvas.toDataURL());
        } catch (error) {
          console.error('Error generating thumbnail:', error);
          setThumbnailUrl('/default-thumbnail.png'); // Fallback to a default image
        }
      };

  useEffect(() => {
    renderThumbnail(pdf.link, setThumbnailUrl);
  }, [pdf.link]);
  return (
    <div className="pdf-item" onClick={() => onSelectPdf(pdf)}>
      <img src={thumbnailUrl} alt={`${pdf.name} thumbnail`} className="pdf-thumbnail" />
      <div className="pdf-info">
        <h3>{pdf.name}</h3>
        <p>{pdf.author}</p>
      </div>
    </div>
  )
}

export default PDFItem
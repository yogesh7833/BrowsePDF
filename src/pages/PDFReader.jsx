import React from 'react'

const PDFReader = ({ selectedPdf, onClose }) => {
  return (
    <div className="pdf-reader">
    <button onClick={onClose}>Close</button>
    {selectedPdf && (
      <iframe
        src={selectedPdf.link}
        title={selectedPdf.name}
        width="100%"
        height="500px"
      ></iframe>
    )}
  </div>
  )
}

export default PDFReader
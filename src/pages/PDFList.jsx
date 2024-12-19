import React from 'react'
import PDFItem from './PDFItem'

const PDFList = ({ pdfs, onSelectPdf }) => {
  return (
    <div className="pdf-list">
      {pdfs.map((pdf) => (
        <PDFItem key={pdf.name} pdf={pdf} onSelectPdf={onSelectPdf} />
      ))}
    </div>
  )
}

export default PDFList
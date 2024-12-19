import React from 'react'

const ListView = ({post, onSelectPdf}) => {

  return (
    <div className="pdf-list">
      {post.map((pdf) => (
        <div
          key={pdf.id}
          className="pdf-item"
          onClick={() => onSelectPdf(pdf)}
        >
          <img src={pdf.thumbnail} alt={`${pdf.title} thumbnail`} className="pdf-thumbnail" />
          <div className="pdf-info">
            <h3>{pdf.title}</h3>
            <p>{pdf.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListView
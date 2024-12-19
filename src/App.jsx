import React, { useEffect, useState } from 'react'
import PDFList from './pages/PDFList';
import PDFReader from './pages/PDFReader';
import './App.css'
import SearchBar from './pages/SearchBar';
const App = () => {
  const API_URL = 'https://api.npoint.io/dee51ea017d20efdfcc8';

const [pdfs, setPdfs] = useState([]);
  const [filteredPdfs, setFilteredPdfs] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    async function fetchPdfs() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPdfs(data);
        setFilteredPdfs(data);
      } catch (err) {
        setError('Failed to load PDFs. Please try again later.');
      }
    }
    fetchPdfs();
  }, []);

  const handleSearch = (query) => {
    const filtered = pdfs.filter((pdf) =>
      pdf.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPdfs(filtered);
  };

  return (
    <div className="app">
      <h1>PDF Browser</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedPdf ? (
        <PDFReader selectedPdf={selectedPdf} onClose={() => setSelectedPdf(null)} />
      ) : (
        <PDFList pdfs={filteredPdfs} onSelectPdf={setSelectedPdf} />
      )}
    </div>
  )
}

export default App
import './App.css'
import { BookDetail } from './Components/BookDetail/BookDetail';
import { BookReview } from './Components/BookDetail/BookReview';
import { Books } from './Components/Books/Books';
import { BooksList } from './Components/Books/BooksList';
import { Checkout } from './Components/Checkout/Checkout';
// import { Footer } from "./Components/Footer/Footer"
// import { Header } from "./Components/Header/Header"
import { Homepage } from "./Components/Homepage/Homepage"
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (
    <React.Fragment>
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          {/* Books List */}
          <Route path="/home/books" element={<Books />} />
          <Route path="/home/books/grid" element={<Books />} />
          <Route path="/home/books/list" element={<BooksList />} />
          {/* Book Review Detail */}
          <Route path="/home/books/detail" element={<BookDetail />} />
          <Route path="/home/books/review" element={<BookReview />} />
          {/* Checkout */}
          <Route path="/home/checkout" element={<Checkout />} />
          <Route path="/home/books/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}


export default App

import React, { createContext, useState } from 'react'

export const NewsContextData = createContext();

export const NewsContext = ({ children }) => {


  const [newsData, setNewsData] = useState([])

  return (
    <NewsContextData.Provider value={{
      newsData, setNewsData: (val) => setNewsData(val)
    }}>
      {children}
    </NewsContextData.Provider>
  )
}
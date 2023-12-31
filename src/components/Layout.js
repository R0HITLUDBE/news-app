import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material";
const Subscribe = React.lazy(() => import("../components/subscribe"))
const Footer = React.lazy(() => import("../components/footer"))
const Navbar = React.lazy(() => import("../components/navbar"))


const THEME = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});


const Layout = ({ children }) => {

  const [news, setNews] = React.useState([])

  React.useEffect(
    () => {
      getNews()
    }, []
  )

  const getNews = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.GATSBY_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const dataf = data?.results?.filter(news => (news?.title !== ''))
        console.log(dataf)
        setNews(dataf);
      })
      .catch(error => console.log(error));
  }


  return (
      <ThemeProvider theme={THEME}>
        <main className="main">
          <Navbar />
          {children(news)}
          <Subscribe />
          <Footer />
        </main>
    </ThemeProvider>
  )
}

export default Layout
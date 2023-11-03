import * as React from "react"
import '../styles/styles.css'
import { ThemeProvider, createTheme } from "@mui/material";
const Navbar = React.lazy(() => import("../components/navbar"))
const TrendingNews = React.lazy(() => import("../components/trendingNews"))
const LatestNews = React.lazy(() => import("../components/latestNews"))
const MostWatched = React.lazy(() => import("../components/mostWatched"))
const FullStory = React.lazy(() => import("../components/fullStory"))
const Subscribe = React.lazy(() => import("../components/subscribe"))
const Footer = React.lazy(() => import("../components/footer"))

const THEME = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

const IndexPage = () => {

  const [news, setNews] = React.useState([])
  const localnews = sessionStorage.getItem('news');
  React.useEffect(
    () => {
      if (!localnews) {
        getNews()
      } else {
        setNews(JSON.parse(localnews))
      }
    }, []
  )

  const getNews = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${process.env.GATSBY_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setNews(data?.articles);
        sessionStorage.setItem("news", JSON.stringify(data?.articles))
      })
      .catch(error => console.log(error));
  }

  return (
    <ThemeProvider theme={THEME}>
      <React.Suspense fallback={<div></div>}>
        <main className="main">
        <Navbar />
          {news &&
            <>
              <TrendingNews news={news?.[0]} />
              <LatestNews newss={news?.slice(1, 7)} />
              <MostWatched newss={news?.slice(8, 12)} />
              <FullStory newss={news?.slice(13, 18)} />
            </>}
        <Subscribe />
        <Footer />
        </main>
      </React.Suspense>

    </ThemeProvider>

  )
}

export default IndexPage

export const Head = () => <title>Newwws</title>

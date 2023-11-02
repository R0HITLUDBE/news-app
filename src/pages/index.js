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
  return (
    <ThemeProvider theme={THEME}>
      <main className="main">
        <Navbar />
        <TrendingNews />
        <LatestNews />
        <MostWatched />
        <FullStory />
        <Subscribe />
        <Footer />
      </main>
    </ThemeProvider>

  )
}

export default IndexPage

export const Head = () => <title>Newwws</title>

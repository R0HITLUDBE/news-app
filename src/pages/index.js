import * as React from "react"
import '../styles/styles.css'
import Layout from "../components/Layout"
const TrendingNews = React.lazy(() => import("../components/trendingNews"))
const LatestNews = React.lazy(() => import("../components/latestNews"))
const MostWatched = React.lazy(() => import("../components/mostWatched"))
const FullStory = React.lazy(() => import("../components/fullStory"))

const IndexPage = () => {

  return (
    <Layout>
      {news =>
      (<>
              <TrendingNews news={news?.[0]} />
              <LatestNews newss={news?.slice(1, 7)} />
              <MostWatched newss={news?.slice(8, 12)} />
              <FullStory newss={news?.slice(13, 18)} />
      </>)}
    </Layout>


  )
}

export default IndexPage

export const Head = () => <title>Newwws</title>

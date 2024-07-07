import React, { useEffect, useState } from "react";

import { recentNewsApi } from "./utils/api";

import Footer from "./components/footer";
import NotFound from "./components/notfound";
import Header from "./components/header";
import Article from "./components/article";

function App() {
  const [article, setArticle] = useState(null);
  const [articleId, setArticleId] = useState(1);
  const [showError, setShowError] = useState(false);

  // setting article id on click of chips[today,last 7 days,last 30 days]
  const onClickArticle = (Id) => {
    setArticleId(Id);
  };

  //api call to get the most popular article
  const fetchRecentData = () => {
    if (showError) {
      setShowError(false);
    }
    recentNewsApi(articleId)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch(() => {
        setShowError(true);
      });
  };

  useEffect(() => {
    fetchRecentData();
  }, [articleId]);

  // show notfound page if api returns error
  if (showError) {
    return <NotFound onClick={fetchRecentData} />;
  }
  return (
    <div className="container">
      {/* header */}
      <Header />
      {/* header ends */}

      {/* main article section */}
      <Article
        passArticleData={article}
        passArticleId={articleId}
        onClickArticle={onClickArticle}
      />
      {/* main article section ends */}

      {/* // footer  */}
      <Footer />
      {/* // footer ends */}
    </div>
  );
}

export default App;

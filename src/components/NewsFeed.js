import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  flex-direction: column;
  background-color: #212121;
  color: #FFFFFF;
  width: 23.5%;
  padding: 10px;
  overflow-y: scroll;
`
const NewsList = styled.ul`
  list-style: none;
  padding: 0 10px;
`
const NewsItem = styled.li`
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  width: 100%;
`
const ArticleImg = styled.img`
  height: 75px;
  width: 95px;
  display: flex;
`
const ArticleTitle = styled.p`
  height: 75px;
  width: 200px;
  font-weight: 900;
  margin-right: 4px;
`
const ArticleLink = styled.a`
  text-decoration: none;
  color: #FFFFFF;

  &:visited {
    color: #FFFFFF;
  }

  &:hover {
    opacity: 0.7;
  }
`

const NewsFeed = (props) => {
  return (
    <Container>
     <NewsList>
        {props.articles.map((article, index) => 
          <ArticleLink href={article.url} target='_blank' alt='article-image'>
            <NewsItem key={index}>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleImg alt='article-img' src={article.urlToImage}/>
            </NewsItem>
          </ArticleLink>
        )}
     </NewsList>
    </Container>
  )
}
export default NewsFeed;
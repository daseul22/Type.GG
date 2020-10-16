import React from "react";

function HomeCommunityBest() {
  const testArticle = (
    <li className="community-article_list_item">
      <a href="">
        <div className="community-article_list_item_rank green">1</div>
        <div className="community-article_list_item_thumbnail">
          <img src="http://img.danawa.com/cp_images/service/79/4127060/e9189a08.jpg" />
        </div>
        <div className="community-article_list_item_title">
          <span>title</span>
          <em>[commnetsCount]</em>
        </div>
        <div className="community-article_list_item_sub">
          <div className="community-article_list_item_sub_item">
            <span className="timeago" title="">
              N시간 전
            </span>
          </div>
          <div className="community-article_list_item_sub_item">NicName</div>
        </div>
      </a>
    </li>
  );

  return (
    <div className="community-best">
      <div className="community-best_header">
        <a href="" className="community-best_title">
          TP.GG Talk 인기글
        </a>
      </div>
      <div className="community-best_content-left">
        <ul className="community-article_list">
          {testArticle}
          {testArticle}
          {testArticle}
          {testArticle}
          {testArticle}
        </ul>
      </div>
      <div className="community-best_content-right">
        <ul className="community-article_list">
          {testArticle}
          {testArticle}
          {testArticle}
          {testArticle}
          {testArticle}
        </ul>
      </div>
    </div>
  );
}

export default HomeCommunityBest;

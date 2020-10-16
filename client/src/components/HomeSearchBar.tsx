import React from "react";

function HomeSearchBar() {
  return (
    <form
      className="summoner-search-form"
      action="/summoner/"
      autoComplete="off"
    >
      <input
        type="text"
        name="userName"
        className="summoner-search-form_text"
        placeholder="소환사명, 소환사명, ..."
        autoComplete="off"
      />
      <button type="submit" className="summoner-search-form_button">
        <i className="_spSite _spSite42"></i>
      </button>
      <button
        type="button"
        className="summoner-search-form_setting"
        onClick={() => {}}
      >
        <span>KR</span>
        <i className="_spSite _spSite138"></i>
      </button>
      <div className="summoner-search-extra">
        <div className="summoner-search-history">
          <div className="tabWrap_recongnized">
            <ul className="summoner-search-history_title">
              <li className="tabHeader">
                <a onClick={() => {}}>최근검색</a>
              </li>
              <li className="tabHeader">
                <a onClick={() => {}}>즐겨찾기</a>
              </li>
            </ul>
            <div className="tabItems">
              <div className="tabItem summoner-search-history_recent">
                <div className="recent-summoner-wrap">
                  <div className="summoner-search-history_list">
                    <div className="Item">
                      <a href="" className="Link">
                        summoner-name
                      </a>
                      <div className="Actions">
                        <a onClick={() => {}} className="action add"></a>
                        <a onClick={() => {}} className="action delete"></a>
                      </div>
                    </div>
                  </div>
                  <div className="summoner-search-history_message NotFound">
                    <span>최근에 본 소환사가 없습니다.</span>
                  </div>
                </div>
              </div>
              <div className="tabItem summoner-search-history_favorite">
                <div className="favorite-summoner-wrap">
                  <div className="summoner-search-history_list">
                    <div className="Item">
                      <a href="" className="Link">
                        summoner-name
                      </a>
                      <div className="Actions">
                        <a onClick={() => {}} className="action delete"></a>
                      </div>
                    </div>
                  </div>
                  <div className="summoner-search-history_message NotFound">
                    <span>
                      관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를
                      받아보세요.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="autucomplete-suggestions"
            style={{
              position: "absolute",
              display: "none",
              width: "100%",
              maxHeight: "1000px",
              zIndex: 9999,
            }}
          >
            <div className="autocomplete-suggestion">
              {/*소환사, 챔피언 자동완성*/}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default HomeSearchBar;

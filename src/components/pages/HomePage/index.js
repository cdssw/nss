import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { PageTemplate, Header, CardList, Search } from "components";
import { useHistory, Redirect } from "react-router-dom";
import * as Newsong from "../../../services/Newsong";
import Utils from "../../Utils";

export default function HomePage() {
  const history = useHistory();
  const { userInfo, login } = useSelector(state => state.userInfo, {});
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [param, setParam] = useState({});
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const size = 20;
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).access_token : null;

  useEffect(() => {
    if(token === null) {
      history.replace('/login');
    }
  }, []);

  useEffect(e => {
    if(Object.keys(param).length > 0) {
      fetchMoreData(0);
    }
  }, [param]);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  }

  const handleKeyPressSearch = e => {
    if(e.key !== 'Enter') return;
    setParam({
      ...param,
      query: search,
      preTags: "<b>",
      postTags: "</b>",
      searchField: ["songTitle", "songContent"],
      sort: "songNo"
    });
  }

  const handleSearchClick = e => {
    setParam({
      ...param,
      query: search,
      preTags: "<b>",
      postTags: "</b>",
      searchField: ["songTitle", "songContent"],
      sort: "songNo"
    });
  }

  const fetchMoreData = async init => {
    if(Object.keys(param).length > 0) {
      setLoading(true);
      try {
        const p = init === 0 ? init : page;
        const response = await Newsong.postMultiMatchQuery({token: token, body: param, page: p, size: size});
        const data = response.data.content;
        setPage(p + 1); // infinite scroll시 다음페이지 조회
        setItems(init === 0 ? data : items.concat(data));
      } catch(error) {
        Utils.alertError(error);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleLogout = e => {
    localStorage.removeItem('token');
    history.push("/");
  }

  const path = '/login';

  if(token === null) return <Redirect to='/login' />
  return (
    <PageTemplate header={<Header userInfo={userInfo} path={path} onLogout={handleLogout} />} loading={loading}>
      <Search search={search} login={login}
        onKeyPress={handleKeyPressSearch}
        onSearch={handleSearch}
        onSearchClick={handleSearchClick}
      />
      <CardList path="/" fetchMoreData={fetchMoreData} items={items} />
    </PageTemplate>
  );
}


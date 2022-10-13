import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { PageTemplate, Header, CardList, Search } from "components";
import { useHistory, Redirect } from "react-router-dom";
import * as Newsong from "../../../services/Newsong";
import Utils from "../../Utils";
import { Alert } from '@material-ui/lab';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

export default function HomePage() {
  const history = useHistory();
  const { userInfo, login } = useSelector(state => state.userInfo, {});
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [param, setParam] = useState({});
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const size = 20;
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).access_token : null;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if(token === null) {
      history.replace('/login');
    }
  }, [history, token]);

  const fetchMoreData = useCallback(async init => {
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
        if(error.response === undefined || error.response.status === 401) {
          localStorage.removeItem('token');
        }
        if(error.response.data.message === "V_00001") {
          setAlertContent(error.response.data.message);
          setAlertOpen(true);
        }
      } finally {
        if(init === 0) {
          window.scrollTo(0, 0);
        }
        setLoading(false);
      }
    }
  }, [page, items, param, token]);

  useLayoutEffect(e => {
    if(Object.keys(param).length > 0) {
      fetchMoreData(0);
    }
  }, [param, fetchMoreData]);

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
      searchField: ["songContent"]
    });
  }

  const handleLogout = e => {
    localStorage.removeItem('token');
    history.push("/");
  }

  const handleClear = e => {
    setSearch('');
    setItems([]);
    setParam({});
  }

  const path = '/login';

  if(token === null) return <Redirect to='/login' />
  return (
    <PageTemplate 
      header={<Header userInfo={userInfo} path={path} onLogout={handleLogout} onClear={handleClear} />} 
      search={
        <Search search={search} login={login}
          onKeyPress={handleKeyPressSearch}
          onSearch={handleSearch}
          onClear={setSearch}
        />
      }
      loading={loading}
    >
      <CardList path="/" fetchMoreData={fetchMoreData} items={items} />
      {alertOpen && <Alert severity="info">{alertContent}</Alert>}
    </PageTemplate>
  );
}


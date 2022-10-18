import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { PageTemplate, Header, CardList, Search } from "components";
import { useHistory, Redirect } from "react-router-dom";
import * as Newsong from "../../../services/Newsong";
import Utils from "../../Utils";
import { Alert } from '@material-ui/lab';
import { useLayoutEffect } from 'react';
import useScrollMove from '../../useScrollMove';

export default function HomePage(props) {
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
  const prevState = props.location.state;
  const { pos, removePos } = useScrollMove({
    page: 'home',
    path: '/'
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if(token === null) {
      history.replace('/login');
    }
  }, [history, token]);

  // 뒤로가기로 왔을때 scroll 복구
  useEffect(() => {
    if(pos) {
      window.scrollTo(0, pos);
      const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      if(scrollTop === pos) {
        removePos();
      }
    }
  }, [pos, removePos, items]);

  const fetchMoreData = async init => {
    if(Object.keys(param).length > 0) {
      setLoading(true);
      try {
        const p = init === 0 ? init : page;
        const response = await Newsong.postSearch({token: token, body: param, page: p, size: size});
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
  }

  // 뒤로가기로 왔을때 state 정보 복구
  useLayoutEffect(e => {
    if(prevState) {
      prevState.items && setItems(prevState.items);
      prevState.search && setSearch(prevState.search);
      prevState.page && setPage(prevState.page);
      prevState.param && setParam(prevState.param);
    }
  }, [prevState]);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  }

  const handleKeyPressSearch = e => {
    if(e.key !== 'Enter') return;
    removePos(); // 스크롤 위치 삭제
    setPage(0); // 첫페이지 로딩
    setParam({
      ...param,
      query: search,
      preTags: "<b>",
      postTags: "</b>",
      searchField: ["songContent"]
    });
  }

  // param이 바뀌고 page 0일때 로딩, 나머지는 infinite에서 처리됨
  useEffect(e => {
    if(page === 0) {
      fetchMoreData(0);
    }
  }, [param, page])

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
      <CardList path="/" fetchMoreData={fetchMoreData} items={items} param={param} page={page} search={search} />
      {alertOpen && <Alert severity="info">{alertContent}</Alert>}
    </PageTemplate>
  );
}


import React, { useState, useEffect } from 'react';
import { PageTemplate, TitleHeader, Content } from "components";
import * as Newsong from "../../../services/Newsong";
import Utils from "../../Utils";
import { useHistory, Redirect } from "react-router-dom";

export default function ContentPage(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState({});
  const [param, setParam] = useState({});
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).access_token : null;
  const state = props.location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    if(token === null) {
      history.replace('/login');
    }
    setParam({
      ...param,
      query: state.search,
      preTags: "<b>",
      postTags: "</b>",
      searchField: ["songContent"]
    });
  }, [history, token, setParam]);

  useEffect(() => {
    postSearchOne(token);
  }, [token, param]);

  const postSearchOne = async token => {
    if(Object.keys(param).length > 0) {
      setLoading(true);
      try {
        // Content 정보
        const contents = await Newsong.postSearchOne({songNo: props.match.params.songNo, token: token, body: param});
        setContents(contents);
      } catch(error) {
        Utils.alertError(error);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleBack = e => {
    history.push({
      pathname: props.location.path,
      path: props.location.path,
      state: state
    });
  }

  if(token === null) return <Redirect to='/login' />
  return (
    <PageTemplate header={<TitleHeader onBack={handleBack} {...props}>새노래 {contents.data && contents.data.content[0].source.songNo}장</TitleHeader>} loading={loading}>
      <Content contents={contents} />
    </PageTemplate>
  );
}


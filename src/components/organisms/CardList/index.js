import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "components";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function CardList(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <InfiniteScroll
          dataLength={props.items.length}
          next={props.fetchMoreData}
          hasMore={true}
        >
          {props.items.map((item, index) => (
            <Card key={index} item={item}
              onContentClick={() => {
                  history.push({
                    pathname: '/content/' + item.source.songNo,
                    path: props.path,
                    state: {search: props.search, items: props.items, param: props.param, page: props.page}
                  });
                }
              }
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from "@material-ui/core";
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: "0 0 5px",
  },
  placeWrap: {
    marginRight: '5px',
  },
  place: {
    backgroundColor: 'white',
  },
  searchWrap: {
    flexGrow: 1,
  },
  search: {
    width: '15px'
  },
  selectOutlined: {
    backgroundColor: theme.colorWhite,
  },
}));

export default function Search({onSearch, search, onKeyPress}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchWrap}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img className={classes.search} src={resources.search} alt="search" />
              </InputAdornment>
            ),
          }}
          fullWidth={true}
          variant="outlined"
          placeholder="검색어를 입력하세요."
          name="search"
          type="search"
          value={search}
          onChange={onSearch}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}

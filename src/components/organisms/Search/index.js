import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: "0 20px 5px",
  },
  searchWrap: {
    flexGrow: 1,
  },
  search: {
    width: '15px'
  },
}));

export default function Search({onSearch, search, onKeyPress, onClear}) {
  const classes = useStyles();

  const handleSearch = e => {
    if(e.keyCode === 13) {
      e.target.blur();
      onKeyPress(e);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.searchWrap}>
        <form action="">
          <TextField
            fullWidth={true}
            variant="outlined"
            placeholder="검색어를 입력하세요."
            name="search"
            type="search"
            value={search}
            onChange={onSearch}
            onKeyDown={(e) => handleSearch(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: search && (
                <IconButton
                  aria-label="toggle passwor visibility"
                  onClick={() => onClear("")}
                >
                  <CancelRoundedIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.less';

interface SearchInputProps {
  queryList: Function;
}
const SearchInput: React.FC<SearchInputProps> = (props) => {
  const inputRef = useRef<any>(null);
  const [input, setInput] = useState<string>('');
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const inputChange = useCallback((val: string) => {
    setInput(val);
  }, []);
  const handle = useCallback(() => {
    if (searchMode) {
      // 搜索
      const val = input.trim();
      props.queryList({
        searchKey: val,
        pageNo: 0,
      });
    } else {
      history.push('/');
    }
  }, [searchMode, input]); // 添加依赖代表依赖改变，该方法还可以再次执行
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    const val = input.trim();
    setSearchMode(val !== '');
  }, [input]);
  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={input}
        onChange={inputChange}
        clear
        className={styles.searchBar}
      />
      <Button
        type="primary"
        onClick={handle}
        className={styles.btn}
        disabled={false}
      >
        {searchMode ? '搜索' : '取消'}
      </Button>
    </div>
  );
};
export default SearchInput;

import React, { Component } from 'react';
import { PaginationType } from '@/@types/list';
import { ProductType } from '@/@types/product';
import SearchInput from './SearchInput';
import { query } from '@/services/search';
import List from './List';

interface ListState {
  data: ProductType[];
  pagination: PaginationType;
}

export default class Search extends Component<{}, ListState> {
  state: ListState = {
    data: [],
    pagination: {
      totalPage: 0,
      pageNo: 0,
      pageSize: 10,
      searchKey: '',
    },
  };

  queryList = (paginationParams?: PaginationType) => {
    // 查询列表
    const { pagination } = this.state;
    let pageNo = pagination.pageNo;
    let pageSize = pagination.pageSize;
    let searchKey = pagination.searchKey;

    if (paginationParams) {
      if (paginationParams.pageNo !== undefined) {
        pageNo = paginationParams.pageNo;
      }
      pageSize = paginationParams.pageSize || pageSize;
      searchKey = paginationParams.searchKey || searchKey;
    }

    query({
      pageNo,
      pageSize,
      searchKey,
    }).then((res) => {
      const { list } = res;
      this.saveState(list);
    });
  };

  saveState = (partialState: {
    data?: ProductType[];
    pagination: PaginationType;
  }) => {
    let data = [...this.state.data, ...(partialState.data || [])];
    let pagination = {
      ...this.state.pagination,
      ...partialState.pagination,
    };

    if (pagination.pageNo === 0) {
      data = partialState.data || [];
    }

    this.setState({ data, pagination });
  };

  render() {
    const { data, pagination } = this.state;
    return (
      <div>
        <SearchInput queryList={this.queryList} />
        <List data={data} pagination={pagination} queryList={this.queryList} />
      </div>
    );
  }
}

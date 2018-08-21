// @flow

import React, { Component, createContext } from 'react';
import type { Node } from 'react';
import { searchResults, shortDate } from './utils/fuzzy';
import getTransactions from '@app/utils/getTransactions';
import { Input, InputKeys, Results } from './compounds';

const SearchFormContext = createContext();

type Props = {
  children: Node
};

type State = {
  searchResults: ?Array<mixed>,
  list: Array<mixed>,
  keys: Array<string>
};

export default class SearchForm extends Component<Props, State> {
  static Input = Input;
  static InputKeys = InputKeys;
  static Results = Results;

  state = {
    searchResults: [],
    list: [],
    keys: []
  };

  componentDidMount() {
    this.setState({
      searchResults: getTransactions(),
      list: getTransactions()
    });
  }

  search = (pattern: any = '') => {
    let results = [];
    let { list, keys } = this.state;

    for (let indexItem = 0; indexItem < list.length; indexItem += 1) {
      const item = list[indexItem];

      for (let indexKey = 0; indexKey < keys.length; indexKey += 1) {
        let key = keys[indexKey];
        let value = item[key];

        results = searchResults(value, item, indexItem, pattern, results);
      }
    }

    return shortDate(results);
  };

  updateSearchText = (event: SyntheticInputEvent<*>) => {
    const { list, keys } = this.state;

    this.setState({
      searchResults:
        event.target.value && keys.length > 0
          ? this.search(event.target.value)
          : list
    });
  };

  updateKeys = (event: SyntheticInputEvent<*>) => {
    this.setState({
      keys: event.target.value.split(', ')
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SearchFormContext.Provider
        value={{
          updateSearchText: this.updateSearchText,
          updateKeys: this.updateKeys,
          data: this.state.searchResults
        }}
      >
        {children}
      </SearchFormContext.Provider>
    );
  }
}

type ConsumerProps = {
  children: Function
};

export const Consumer = ({ children }: ConsumerProps) => (
  <SearchFormContext.Consumer>
    {context => {
      if (!context) {
        throw new Error(
          "Consumers of <SearchForm> component's context should render within the <SearchForm /> component."
        );
      }
      return children(context);
    }}
  </SearchFormContext.Consumer>
);

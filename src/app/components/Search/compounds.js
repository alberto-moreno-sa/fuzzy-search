// @flow

import React from 'react';
import { Input as SemanticInput } from 'semantic-ui-react';
import { Consumer } from './SearchForm';

type Props = {};

export const Input = ({ ...rest }: Props) => (
  <Consumer>
    {({ updateSearchText }) => (
      <SemanticInput
        onChange={updateSearchText}
        placeholder="Serach"
        {...rest}
      />
    )}
  </Consumer>
);

export const InputKeys = ({ ...rest }: Props) => (
  <Consumer>
    {({ updateKeys }) => (
      <SemanticInput
        onChange={updateKeys}
        placeholder="element1, element 2, element 3 ...."
        {...rest}
      />
    )}
  </Consumer>
);

type ResultsProps = {
  children: Function
};

export const Results = ({ children, ...rest }: ResultsProps) => (
  <Consumer>
    {({ data }) => {
      return children(data);
    }}
  </Consumer>
);

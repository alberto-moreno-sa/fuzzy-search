import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import SearchForm from '../SearchForm';

describe('<SearchForm />', () => {
  test('should render', () => {
    const { container } = render(
      <SearchForm>
        <SearchForm.Input />
        <SearchForm.InputKeys />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              {data.map((result, i) => (
                <h4 key={i}>{result.amount}</h4>
              ))}
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );
    expect(container).toBeInTheDocument();
  });

  test('should detect changes on input', () => {
    const { getByPlaceholderText } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              {data.map((result, i) => (
                <h4 key={i}>{result.amount}</h4>
              ))}
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    let searchText = getByPlaceholderText('Search');

    fireEvent.change(searchText, { target: { value: 'Foo' } });
    expect(searchText.value).toBe('Foo');

    searchText = getByPlaceholderText('Keys');
    fireEvent.change(searchText, { target: { value: 'bar' } });

    expect(searchText.value).toBe('bar');
  });

  test('should show all results when the Input amd InputKeys are empty', () => {
    const { container } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              <h4>{data.length}</h4>
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    expect(container).toContainHTML('<h4>10</h4>');
  });

  test('should show all results when the Input is empty', () => {
    const { container, getByPlaceholderText } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              <h4>{data.length}</h4>
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    let keysText = getByPlaceholderText('Keys');
    fireEvent.change(keysText, { target: { value: 'amount' } });

    expect(container).toContainHTML('<h4>10</h4>');
  });

  test('should show all results when the InputKeys is empty', () => {
    const { container, getByPlaceholderText } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              <h4>{data.length}</h4>
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    let searchText = getByPlaceholderText('Search');
    fireEvent.change(searchText, { target: { value: '112.98' } });

    expect(container).toContainHTML('<h4>10</h4>');
  });

  test('should show empty results', () => {
    const { container, getByPlaceholderText } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              <h4>{data.length}</h4>
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    let keysText = getByPlaceholderText('Keys');
    fireEvent.change(keysText, { target: { value: 'amount' } });

    let searchText = getByPlaceholderText('Search');
    fireEvent.change(searchText, { target: { value: 'gggg' } });

    expect(container).toContainHTML('<h4>0</h4>');
  });

  test('should show results', () => {
    const { container, getByPlaceholderText } = render(
      <SearchForm>
        <SearchForm.Input placeholder="Search" />
        <SearchForm.InputKeys placeholder="Keys" />
        <SearchForm.Results>
          {data => (
            <div>
              <h3>Results</h3>
              {data.map((result, i) => (
                <h4 key={i}>{result.amount}</h4>
              ))}
            </div>
          )}
        </SearchForm.Results>
      </SearchForm>
    );

    let keysText = getByPlaceholderText('Keys');
    fireEvent.change(keysText, { target: { value: 'amount' } });

    let searchText = getByPlaceholderText('Search');
    fireEvent.change(searchText, { target: { value: '112.98' } });

    expect(container).toContainHTML('<h4>112.98</h4>');
  });
});

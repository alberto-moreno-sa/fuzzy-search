// @flow

import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {
  Segment,
  Divider,
  Form,
  Label,
  Container,
  Header,
  Card
} from 'semantic-ui-react';
import SearchForm from '@app/components/Search/SearchForm';

const App = () => (
  <Segment>
    <Container fluid>
      <Header as="h2">Seacrh Fuzzy</Header>
      <SearchForm>
        <Form>
          <Card fluid>
            <Card.Content>
              <Form.Field>
                <label>Search Transactions</label>
                <SearchForm.Input />
              </Form.Field>
              <Divider />
              <Form.Field>
                <label>Keys</label>
                <SearchForm.InputKeys />
                <Label pointing>
                  List of properties that will be searched, they must be some
                  the following: amount, date or card_last_four
                </Label>
              </Form.Field>
            </Card.Content>
          </Card>
        </Form>
        <Header as="h3">Results</Header>
        <SearchForm.Results>
          {data => (
            <ReactTable
              data={data}
              columns={[
                {
                  columns: [
                    {
                      Header: 'amount',
                      accessor: 'amount'
                    },
                    {
                      Header: 'date',
                      accessor: 'date'
                    },
                    {
                      Header: 'card last four',
                      accessor: 'card_last_four'
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          )}
        </SearchForm.Results>
      </SearchForm>
    </Container>
  </Segment>
);

export default App;

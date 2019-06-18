import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';

import Layout from '../../../components/common/Layout';
import AlgoliaGridResults from '../../../components/algolia/GridResults';

const port = parseInt(process.env.PORT, 10) || 3001;

const AlgoliaMany = props => {
  const { data } = props;

  return (
    <Layout title={data.pageName}>
      <Segment>
        <AlgoliaGridResults results={data} index={searchIndex} />
      </Segment>
    </Layout>
  );
};

AlgoliaMany.getInitialProps = async ({ asPath }) => {
  const pathObj = asPath.split('/');

  try {
    const res = await axios(
      `http://localhost:${port}/api/algolia?searchIndex=${pathObj[1]}`
    );

    return {
      data: res.data.data.hits,
      searchIndex: pathObj[1],
    };
  } catch (error) {
    console.error(error);
  }
};

export default AlgoliaMany;

import React from 'react';
import { Image, Grid, Card } from 'semantic-ui-react';

const AlgoliaGridResults = props => {
  const { results } = props;

  return (
    <Grid columns={6}>
      <Grid.Row>
        {results.map((query, index) => (
          <Grid.Column key={index}>
            <Card
              className="basic"
              fluid
              href={`/${results.searchPermalink}/${query.slug}`}
              link
            >
              <Image
                alt={`${query.name} - ${query.posts_count} products`}
                as="a"
                size="small"
                src="https://react.semantic-ui.com/images/wireframe/image-text.png"
                srcSet="/images/wireframe/image.png 2x"
                ui={false}
                wrapped
              />

              <Card.Content>
                <Card.Header>{query.name}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default AlgoliaGridResults;
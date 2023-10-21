import React, { useState } from 'react';
import { TextArea, Input, Button, Grid, Container, Segment } from 'semantic-ui-react';

function App() {
  const [personaInput, setPersonaInput] = useState('Default text for persona...');
  const [contextInput, setContextInput] = useState('Default text for context...');
  const [promptInput, setPromptInput] = useState('Default text for prompt...');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    // Combine texts for demonstration. Modify as needed.
    setOutput(`${personaInput} ${contextInput} ${promptInput}`);
  };

  return (
    <Container>
      <Grid stackable columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <TextArea
              placeholder='Default text for persona...'
              value={personaInput}
              onChange={(e, { value }) => setPersonaInput(value)}
              style={{ width: '100%', minHeight: '150px' }}
            />
          </Grid.Column>
          <Grid.Column>
            <TextArea
              placeholder='Default text for context...'
              value={contextInput}
              onChange={(e, { value }) => setContextInput(value)}
              style={{ width: '100%', minHeight: '150px' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={10}>
            <Input
              fluid
              placeholder='Default text for prompt...'
              value={promptInput}
              onChange={(e, { value }) => setPromptInput(value)}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={4} textAlign="center">
            <Button primary onClick={handleSubmit}>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign="center" padded>
        {output}
      </Segment>
    </Container>
  );
}

export default App;

import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName: string) => (
            <ModelSection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Deliver"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page;
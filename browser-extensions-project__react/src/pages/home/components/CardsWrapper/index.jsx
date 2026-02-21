import React from 'react';
import Card from '../Card';
import { extensionsData } from '../../../../data/extensions-data';

function CardsWrapper() {
  return (
    <main className='card-wrapper'>
      {extensionsData.map((each) => (
        <Card key={each.extensionName} extension={each} />
      ))}
    </main>
  );
}

export default CardsWrapper;

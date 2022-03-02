import React from 'react';
import { Image } from './image';

export const BasicImage = () => <Image src="https://picsum.photos/200/300" />;

export const NonBareImage = () => (
  <Image src="https://picsum.photos/200/300" bare={false} />
);

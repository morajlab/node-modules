import React, { Fragment } from 'react';
import { Text } from './text';

export const BareText = () => (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ex et
    sapiente quidem accusamus omnis ad porro ipsa magnam, molestias ab nemo
    inventore. Nisi voluptatum, est porro enim odit officiis.
  </Text>
);

export const NonSelectableText = () => (
  <Text selectable={false}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat,
    molestias provident consequuntur reiciendis beatae consequatur blanditiis
    suscipit quod qui aut quibusdam, quis nulla commodi dicta placeat excepturi.
    Quidem, commodi?
  </Text>
);

export const FontFamilyText = () => (
  <Fragment>
    <Text fontFamily="'Times New Roman', Times, serif">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
      corporis. Accusamus nobis asperiores cumque laudantium soluta delectus
      voluptate laborum nesciunt, sint vel eveniet dolor optio, hic voluptas
      quasi explicabo iure!
    </Text>
    <br />
    <Text fontFamily="Arial, Helvetica, sans-serif">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
      corporis. Accusamus nobis asperiores cumque laudantium soluta delectus
      voluptate laborum nesciunt, sint vel eveniet dolor optio, hic voluptas
      quasi explicabo iure!
    </Text>
  </Fragment>
);

export const TextAsParagraph = () => (
  <Text as="p">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda!
    Qui necessitatibus magnam modi obcaecati, ut id consequuntur, porro labore
    ipsum tempore vel, molestiae hic illum quia voluptate eligendi fugiat.
  </Text>
);

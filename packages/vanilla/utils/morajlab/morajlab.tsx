#!/usr/bin/env node

import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import { App } from './ui';

const cli = meow(
  `
	Usage
	  $ morajlab

	Options
		--name  Your name

	Examples
	  $ morajlab --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  }
);

render(<App name={cli.flags.name} />);

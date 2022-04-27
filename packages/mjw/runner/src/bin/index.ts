#!/usr/bin/env node

import which from 'which';
import boxen from 'boxen';

try {
  which.sync('mjw');

  console.log('package mjw found !');
} catch (error) {
  console.log(
    boxen("'mjw' tool not found", {
      title: 'mjwr',
      titleAlignment: 'center',
      borderColor: 'redBright',
      padding: 1,
      margin: 1,
    })
  );
}

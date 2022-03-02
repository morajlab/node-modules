/* @mjw-info: util dependency */
import * as _merger from 'merge-anything';
import classnames from 'classnames';
/* @mjw-info: util dependency */

const mergeProps = (...objects: [{}, {}]) => {
  for (const [key, value] of Object.entries(objects[1])) {
    let new_value = value;

    if (
      Object.keys(objects[0]).includes(key) &&
      typeof value === 'string' &&
      typeof (objects[0] as any)[key] === 'string'
    ) {
      new_value = classnames((objects[0] as any)[key], { [value]: true });
    }

    (objects[1] as any)[key] = new_value;
  }

  return _merger.merge(objects[0], objects[1]);
};

export const merger = { ..._merger, ...{ classnames }, mergeProps };
export * from '@morajlab/npm.react.utils.style';

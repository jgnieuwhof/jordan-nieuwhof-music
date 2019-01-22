import React from 'react';
import Responsive from 'react-responsive';

export const desktop = 992;

export const tablet = 768;

export const Desktop = x => <Responsive {...x} minWidth={desktop} />;

export const Tablet = x => (
  <Responsive {...x} minWidth={tablet} maxWidth={desktop - 1} />
);

export const Mobile = x => <Responsive {...x} maxWidth={tablet - 1} />;

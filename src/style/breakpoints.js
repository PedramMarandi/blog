export const breakpoints = {
  mobile: '37.5em',
  medium: '62.375em',
  large: '75em'
};

export const mobileOnly = `(max-width: ${breakpoints.mobile})`;
export const mobileUp = `(min-width: ${breakpoints.mobile})`;

export const mediumOnly = `(max-width: ${breakpoints.medium})`;
export const mediumUp = `(min-width: ${breakpoints.medium})`;

export const largeOnly = `(max-width: ${breakpoints.large})`;
export const largeUp = `(min-width: ${breakpoints.large})`;

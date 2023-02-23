// getFullYear that will return the current year
export const getFullYear = () => new Date().getFullYear();

// getFooterCopy It accepts one argument isIndex(boolean). 
export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School Main Dashboard';
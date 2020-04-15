import React from 'react';
import { Link } from 'react-router-dom';

export default ({ href, to, children, ...rest }) => {
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <Link to={to} {...rest}>{children}</Link>;
}
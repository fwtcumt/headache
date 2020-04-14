import React from 'react';
import { Link } from 'react-router-dom';

export default ({ href, to, children, ...rest }) => {
  if (href) {
    return <a href={href} {...rest}>{children}</a>;
  }
  if (to) {
    return <Link to={to} {...rest}>{children}</Link>;
  }
}
/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: #41addd;
  &:hover {
    color: #6cc0e5;
  }
`;

/*
 * Link using best practices
 * Ref: https://stackoverflow.com/a/45902400/1771644
 */
const Link = ({
  className = '',
  href = '',
  ...props
}: {
  className: string,
  href: string,
  children: Object,
}) => (
  <A
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    href={href}
  >
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </A>
);
export { Link };
export default A;

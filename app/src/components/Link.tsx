import * as React from 'react'
import * as PropTypes from 'prop-types'

interface LinkProps {
  active: boolean;
  children: JSX.Element;
  onClick:  () => void;
}

const Link: React.SFC<LinkProps> = ({ active, children, onClick }): JSX.Element => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link;

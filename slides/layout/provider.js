import React from 'react';
const Provider = props => (
  <div>
    <div css={{
      position: 'absolute',
      top: 0,
      height: 6,
      left: 0,
      right: 0,
      backgroundColor: '#3880FF',
      zIndex: 1
    }}></div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        fontFamily: '"Inter", system-ui, sans-serif',
        right: 0,
        bottom: 0,
        margin: 16,
        color: ''
      }}
    >
      @mhartington
    </div>
  </div>
)

export default {
  Provider,
}

import React from 'react'
import inventory from '../../components/inventory'

interface BlockInterface {
  __typename: string
  [key: string]: any
}

const Repeater = ({ blocks }: { blocks: BlockInterface[] }) => (
  <React.Fragment key="blocks">
    {blocks.map((block, index) => {
      if (inventory[block.__typename]) {
        return React.createElement(
          inventory[block.__typename],
          { block, key: `block.${block.__typename}__${index}` },
          null,
        )
      }
      return (
        <div>
          Block
          {block.__typename}
          not found
        </div>
      )
    })}
  </React.Fragment>
)

export default Repeater

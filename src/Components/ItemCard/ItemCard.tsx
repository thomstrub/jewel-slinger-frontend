import React from 'react'
import { IItem } from '../../types/maintypes'
export default function ItemCard(props:any) {
  return (
    <div><p>{props.item.name}</p></div>
  )
}

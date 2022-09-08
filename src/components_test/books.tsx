import * as React from 'react'

export interface BooksProps {
  titles: string[]
}

// map練習 mapの基本形
export const Books: React.FC<BooksProps> = (props) => {
  // 空なら表示しない
  if (props.titles.length == 0) return null

  const listItems = props.titles.map((title: string, index: number) => (
    <li key={index}>{title}</li>
  ))

  return <ul>{listItems}</ul>
}

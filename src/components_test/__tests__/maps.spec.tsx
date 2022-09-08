import { Books } from '../maps'
import { render } from '@testing-library/react'

test('map練習 mapの基本形', () => {
  const titles = ['タイトル1', 'タイトル2', 'タイトル3']
  const { getByText } = render(<Books titles={titles} />)
  expect(getByText('タイトル1')).toBeTruthy()
})

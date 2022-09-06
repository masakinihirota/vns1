import Home from '../../pages/index'
import { render } from '@testing-library/react'

// コンポーネント以外での場所のテスト 表示した文字列のみ
describe('index.tsxコンポーネント', () => {
  test('should first', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Welcome to Values Networking Service!')).toBeTruthy()
  })
})

import Button1 from './Button1'

export default {
  title: 'Common/Button1',
  component: Button1,
}

// ストーリーを一つ作る
export const HelloButton = () => (
  <Button1 className="bg-gradient-to-r from-cyan-500 to-blue-500">
    Hello World!
  </Button1>
)
// ストーリーを増やす
export const ClickButton = () => <Button1>Click World!</Button1>

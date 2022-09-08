export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full bg-slate-100 p-5 text-slate-500 ${className}`}
    >
      <p className={`bg-green-500>Canada2`}>111</p>

      <p>Canada2</p>
    </footer>
  )
}

export default Footer

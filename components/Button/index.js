export default function Button({ href, children, outline = false }) {
  if (outline) {
    return (
      <a
        className='py-5 block w-full max-w-[214px] text-center bg-white text-primary border border-primary rounded-tl-[40px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[40px]'
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      className='py-5 block w-full max-w-[214px] text-center mr-4 bg-primary text-white border border-primary rounded-tl-[40px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[40px]'
      href={href}
    >
      {children}
    </a>
  )
}

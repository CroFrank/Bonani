import Link from 'next/link'

interface ButtonProps {
  href: string
  content: string
}

export function Button({ href, content }: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded border-2 border-components px-4 py-2 font-bold text-components transition duration-300 ease-in-out hover:bg-components hover:text-white"
    >
      {content}
    </Link>
  )
}

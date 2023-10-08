import Link from "next/link";

interface ButtonProps {
    href: string
    content: string
}

export default function Button({ href, content }: ButtonProps) {
    return (
        <Link href={href} className="border-2 border-components hover:text-white hover:bg-components text-components font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            {content}
        </Link>
    )

}
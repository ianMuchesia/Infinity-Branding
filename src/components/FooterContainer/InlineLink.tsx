import Link from "next/link";


interface Props{
    href: string;
    text:string;
}

const InlineLink = ({ href, text }:Props) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noreferrer"
			className="relative inline-block text-blue-100 after:h-[1px] after:bg-blue-500 after:relative after:block after:bottom-0 after:w-0 after:hover:w-full after:transition-normal  after:origin-left after:opacity-50"
		>
			{text}
		</Link>
	);
};

export default InlineLink;
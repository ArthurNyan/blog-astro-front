import { Button } from './ui/button';

interface MDXLinkProps {
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export default function MDXLink({ href, children, onClick }: MDXLinkProps) {
	return (
		<Button
			variant="outline"
			asChild
			onClick={onClick}
		>
			<a href={href}>{children}</a>
		</Button>
	);
}

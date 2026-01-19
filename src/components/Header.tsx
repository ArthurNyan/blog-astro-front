import { Github, Twitter } from 'lucide-react';
import { SITE_TITLE } from '@/consts';

interface HeaderLinkProps {
	href: string;
	children: React.ReactNode;
	pathname: string;
}

function HeaderLink({ href, children, pathname }: HeaderLinkProps) {
	const subpath = pathname.match(/[^/]+/g);
	const isActive = href === pathname || href === '/' + (subpath?.[0] || '');

	return (
		<a
			href={href}
			className={`inline-block px-2 py-4 text-foreground no-underline border-b-4 transition-colors ${
				isActive
					? 'border-primary font-bold'
					: 'border-transparent hover:border-primary/50'
			}`}
		>
			{children}
		</a>
	);
}

interface HeaderProps {
	pathname: string;
}

export default function Header({ pathname }: HeaderProps) {
	return (
		<header className="m-0 px-4 bg-card shadow-sm">
			<nav className="flex items-center justify-between">
				<h2 className="m-0 text-base">
					<a href="/" className="no-underline text-foreground py-4 px-2 inline-block">
						{SITE_TITLE}
					</a>
				</h2>
				<div className="flex items-center">
					<HeaderLink href="/" pathname={pathname}>
						Home
					</HeaderLink>
					<HeaderLink href="/blog" pathname={pathname}>
						Blog
					</HeaderLink>
					<HeaderLink href="/about" pathname={pathname}>
						About
					</HeaderLink>
				</div>
				<div className="hidden md:flex items-center gap-2">
					<a
						href="https://m.webtoo.ls/@astro"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors p-2"
					>
						<span className="sr-only">Follow Astro on Mastodon</span>
						<svg
							viewBox="0 0 16 16"
							aria-hidden="true"
							width="24"
							height="24"
							fill="currentColor"
						>
							<path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
						</svg>
					</a>
					<a
						href="https://twitter.com/astrodotbuild"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors p-2"
					>
						<span className="sr-only">Follow Astro on Twitter</span>
						<Twitter className="w-6 h-6" />
					</a>
					<a
						href="https://github.com/withastro/astro"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors p-2"
					>
						<span className="sr-only">Go to Astro's GitHub repo</span>
						<Github className="w-6 h-6" />
					</a>
				</div>
			</nav>
		</header>
	);
}

import React from 'react';
import { Button, buttonVariants } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { MenuToggleIcon } from '@/shared/components/ui/menu-toggle-icon';
import { useScroll } from '@/shared/hooks/use-scroll';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shared/components/ui/navigation-menu';
import type { NavigationItem } from './header.types';

export interface HeaderProps {
	navigationItems?: NavigationItem[];
}

export function Header({ navigationItems }: HeaderProps) {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	// Дефолтные данные для примера (будут заменены данными из Strapi)
	const defaultNavigation: NavigationItem[] = [
		{
			label: 'Getting Started',
			submenu: {
				featured: {
					title: 'shadcn/ui',
					href: '/',
					description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
				},
				items: [
					{
						title: 'Introduction',
						href: '/docs',
						description: 'Re-usable components built using Radix UI and Tailwind CSS.',
					},
					{
						title: 'Installation',
						href: '/docs/installation',
						description: 'How to install dependencies and structure your app.',
					},
					{
						title: 'Typography',
						href: '/docs/primitives/typography',
						description: 'Styles for headings, paragraphs, lists...etc',
					},
				],
			},
		},
		{
			label: 'Components',
			submenu: {
				items: [
					{
						title: 'Alert Dialog',
						href: '/docs/primitives/alert-dialog',
						description: 'A modal dialog that interrupts the user with important content.',
					},
					{
						title: 'Hover Card',
						href: '/docs/primitives/hover-card',
						description: 'For sighted users to preview content available behind a link.',
					},
					{
						title: 'Progress',
						href: '/docs/primitives/progress',
						description: 'Displays an indicator showing the completion progress of a task.',
					},
				],
			},
		},
		{
			label: 'Documentation',
			href: '/docs',
		},
	];

	const navigation = navigationItems || defaultNavigation;

	React.useEffect(() => {
		if (open) {
			// Disable scroll
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scroll
			document.body.style.overflow = '';
		}

		// Cleanup when component unmounts (important for Next.js)
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out mt-4',
				{
					'bg-background/95 supports-backdrop-filter:bg-background/30 border-border backdrop-blur-lg md:top-4 md:max-w-6xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					},
				)}
			>
				<h4 className="text-xl font-bold">Logo</h4>
				<div className="hidden items-center gap-2 md:flex">
					<NavigationMenu>
						<NavigationMenuList>
							{navigation.map((item, index) => (
								<NavigationMenuItem key={index}>
									{item.submenu ? (
										<>
											<NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul
													className={cn(
														'grid gap-3 p-4',
														item.submenu.featured
															? 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
															: 'w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]',
													)}
												>
													{item.submenu.featured && (
														<li className="row-span-3">
															<NavigationMenuLink asChild>
																<a
																	className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
																	href={item.submenu.featured.href}
																>
																	<div className="mb-2 mt-4 text-lg font-medium">
																		{item.submenu.featured.title}
																	</div>
																	<p className="text-sm leading-tight text-muted-foreground">
																		{item.submenu.featured.description}
																	</p>
																</a>
															</NavigationMenuLink>
														</li>
													)}
													{item.submenu.items.map((subItem, subIndex) => (
														<li key={subIndex}>
															<NavigationMenuLink asChild>
																<a
																	className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
																	href={subItem.href}
																>
																	<div className="text-sm font-medium leading-none">
																		{subItem.title}
																	</div>
																	{subItem.description && (
																		<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																			{subItem.description}
																		</p>
																	)}
																</a>
															</NavigationMenuLink>
														</li>
													))}
												</ul>
											</NavigationMenuContent>
										</>
									) : (
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
											href={item.href}
										>
											{item.label}
										</NavigationMenuLink>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>
				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{navigation.map((item, index) => (
							<React.Fragment key={index}>
								{item.submenu ? (
									<div className="space-y-2">
										<div className="px-4 py-2 text-sm font-semibold">{item.label}</div>
										{item.submenu.featured && (
											<a
												className={buttonVariants({
													variant: 'ghost',
													className: 'justify-start flex-col items-start h-auto py-3',
												})}
												href={item.submenu.featured.href}
											>
												<span className="font-medium">{item.submenu.featured.title}</span>
												{item.submenu.featured.description && (
													<span className="text-xs text-muted-foreground">
														{item.submenu.featured.description}
													</span>
												)}
											</a>
										)}
										{item.submenu.items.map((subItem, subIndex) => (
											<a
												key={subIndex}
												className={buttonVariants({
													variant: 'ghost',
													className: 'justify-start flex-col items-start h-auto py-3',
												})}
												href={subItem.href}
											>
												<span className="font-medium">{subItem.title}</span>
												{subItem.description && (
													<span className="text-xs text-muted-foreground">
														{subItem.description}
													</span>
												)}
											</a>
										))}
									</div>
								) : (
									<a
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										})}
										href={item.href}
									>
										{item.label}
									</a>
								)}
							</React.Fragment>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Button variant="outline" className="w-full">
							Sign In
						</Button>
						<Button className="w-full">Get Started</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

import React from 'react';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { MenuToggleIcon } from '@/shared/components/ui/menu-toggle-icon';
import { useScroll } from '@/shared/hooks/use-scroll';
import type { HeaderProps } from '../model';
import { DEFAULT_NAVIGATION } from '../model';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Header = ({ navigationItems }: HeaderProps) => {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const navigation = navigationItems || DEFAULT_NAVIGATION;

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

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
					<DesktopNav items={navigation} />
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>

				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			{/* Mobile Menu */}
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
					<MobileNav items={navigation} />
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
};

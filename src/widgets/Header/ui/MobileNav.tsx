import React from 'react';
import { buttonVariants } from '@/shared/components/ui/button';
import type { NavigationItem } from '../model';
import { MobileNavItem } from './MobileNavItem';

interface MobileNavProps {
	items: NavigationItem[];
}

export const MobileNav = ({ items }: MobileNavProps) => {
	return (
		<div className="grid gap-y-2 overflow-y-auto overflow-x-hidden">
			{items.map((item, index) => (
				<React.Fragment key={index}>
					{item.submenu ? (
						<div className="space-y-2">
							<div className="px-4 py-2 text-sm font-semibold">{item.label}</div>
							{item.submenu.featured && (
								<MobileNavItem item={item.submenu.featured} />
							)}
							{item.submenu.items.map((subItem, subIndex) => (
								<MobileNavItem item={subItem} key={subIndex} />
							))}
						</div>
					) : (
						<MobileNavItem item={{ href: item.href || '#', title: item.label }} />
					)}
				</React.Fragment>
			))}
		</div>
	);
};

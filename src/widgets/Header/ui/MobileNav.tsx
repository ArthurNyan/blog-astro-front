import React from 'react';
import { buttonVariants } from '@/shared/components/ui/button';
import type { NavigationItem } from '../model';

interface MobileNavProps {
	items: NavigationItem[];
}

export const MobileNav = ({ items }: MobileNavProps) => {
	return (
		<div className="grid gap-y-2">
			{items.map((item, index) => (
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
										<span className="text-xs text-muted-foreground">{subItem.description}</span>
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
	);
};

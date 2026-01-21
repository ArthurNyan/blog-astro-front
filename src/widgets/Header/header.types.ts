/**
 * Типы для структуры навигации Header
 * Эти типы соответствуют структуре данных из Strapi
 */

/**
 * Элемент навигационной ссылки (подпункт меню)
 */
export interface NavigationLinkItem {
	/** Заголовок ссылки */
	title: string;
	/** URL ссылки */
	href: string;
	/** Опциональное описание ссылки */
	description?: string;
}

/**
 * Главный элемент навигации
 */
export interface NavigationItem {
	/** Название пункта меню */
	label: string;
	/** Прямая ссылка (используется если нет submenu) */
	href?: string;
	/** Выпадающее меню */
	submenu?: {
		/** Опциональный выделенный элемент (featured) */
		featured?: NavigationLinkItem;
		/** Список подпунктов меню */
		items: NavigationLinkItem[];
	};
}

/**
 * Пример структуры данных для Strapi:
 * 
 * {
 *   "navigation": [
 *     {
 *       "label": "Getting Started",
 *       "submenu": {
 *         "featured": {
 *           "title": "shadcn/ui",
 *           "href": "/",
 *           "description": "Beautifully designed components"
 *         },
 *         "items": [
 *           {
 *             "title": "Introduction",
 *             "href": "/docs",
 *             "description": "Re-usable components"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "label": "Documentation",
 *       "href": "/docs"
 *     }
 *   ]
 * }
 */

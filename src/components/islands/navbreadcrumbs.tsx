import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const generateBreadcrumbs = (pathname: string) => {
	const pathNames = pathname.split("/").filter((path) => path);
	const breadcrumbs = pathNames.map((item, i) => {
		const href = `/${pathNames.slice(0, i + 1).join("/")}`;
		const anchor = `${item.replaceAll("-", " ")}`;
		return {
			href,
			anchor,
		};
	});

	breadcrumbs.unshift({ href: "/", anchor: "Home" });

	return breadcrumbs;
};

export function NavBreadcrumbs({ currentPath }: { currentPath: string }) {
	const breadcrumbs = generateBreadcrumbs(currentPath);
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((o, i, a) => (
					<>
						<BreadcrumbItem key={i}>
							<BreadcrumbLink>
								<a className="capitalize" href={o.href}>{o.anchor}</a>
							</BreadcrumbLink>
						</BreadcrumbItem>
						{
							a.length - 1 !== i ? <BreadcrumbSeparator /> : null
						}
					</>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}


import "@/styles/global.css";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/ListItem";
/**
 * Need to create a wrapper. Check out section Working with Interactive Components
 * https://spacemadness.dev/docs/add-a-shadcn-ui-component/
 */
export function Navbar() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<a href="/home">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>News</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul
							className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
						>
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/news"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											Local
										</div>
										<p
											className="text-sm leading-tight text-muted-foreground"
										>
											Know what is happening around you.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/news" title="Pennsylvania">
								Be in the know of what politics are happening in our state.
							</ListItem>
							<ListItem href="/news" title="National">
								Read about what's going on nationwide.
							</ListItem>
							<ListItem href="/events" title="Events">
								Many events to come and join in the fun.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Election Info</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<ListItem href="/news" title="Elected leaders">
								Know who our leaders are.
							</ListItem>
							<ListItem href="/news" title="Run for office">
								Interested in running? Learn how.
							</ListItem>
							<ListItem href="/news" title="Get involved">
								Find out how you can help.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="/contribute">
						<NavigationMenuLink>
							Contribute
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="/about-us">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About Us
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

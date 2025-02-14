
import "@/styles/global.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import buildImageUrl from "@/shared/build-image-url";
import type { Author } from "studio/sanity.types";
/**
 * Need to create a wrapper. Check out section Working with Interactive Components
 * https://spacemadness.dev/docs/add-a-shadcn-ui-component/
 */
export function UserAvatar({ author }: { author: Author }) {
	return (
		<Avatar>
			<AvatarImage
				src={author.image ? buildImageUrl(author.image).url() : ""}
			/>
			<AvatarFallback>{author.name?.split(' ').map(i => i.charAt(0)).join('').toUpperCase()}</AvatarFallback>
		</Avatar>
	);
}

import type { Member } from "../lib/member-fetch";
import { SNSLink } from "./sns-link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Item } from "./ui/item";

const alternative = "/alternative.png";

export const MemberCard = ({ username, associatedLinks }: Member): React.JSX.Element => {
  const sortedAssociatedLinks = [...associatedLinks];
  sortedAssociatedLinks.sort((a, b) => a.type.localeCompare(b.type));
  const githubIndex = sortedAssociatedLinks.findIndex(({ type }) => type === "github");
  const avatar =
    githubIndex === -1
      ? alternative
      : `https://github.com/${sortedAssociatedLinks[githubIndex].name}.png`;

  return (
    <Item variant="outline" className="h-full gap-4 p-4 text-center">
      <Avatar className="flex-none">
        <AvatarImage src={avatar} alt={username} />
        <AvatarFallback>
          <img src={alternative} />
        </AvatarFallback>
      </Avatar>
      <div className="flex shrink grow flex-col items-start space-y-0.5 break-all">
        <b>{username}</b>
        <div className="flex space-x-4">
          {sortedAssociatedLinks.map((link, i) => (
            <SNSLink key={i} {...link} />
          ))}
        </div>
      </div>
    </Item>
  );
};

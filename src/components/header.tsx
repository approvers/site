import logo from "../assets/android-chrome-192x192.png";
import { Avatar, AvatarImage } from "./ui/avatar";

export const Header = (): JSX.Element => (
  <header className="w-full border-b-2 p-4" data-testid="header">
    <a className="flex justify-center-safe" href="/">
      <Avatar className="bg-accent mr-2 rounded-[37%]">
        <AvatarImage src={logo.src} alt="Approversロゴ" />
      </Avatar>
      <span>Approvers</span>
    </a>
  </header>
);

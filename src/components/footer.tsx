export const Footer = (): JSX.Element => {
  return (
    <footer className="border-accent-foreground border-t-2 p-4 text-center" data-testid="footer">
      <a className="text-accent-foreground mr-2" href="/policy">
        プライバシーポリシー
      </a>
      - (c) 2020 Approvers
    </footer>
  );
};

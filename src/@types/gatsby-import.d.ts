declare module "*.module.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.yaml" {
  const content: { [className: string]: string };
  export = content;
}

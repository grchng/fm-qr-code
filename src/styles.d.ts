// For plain .scss imports
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

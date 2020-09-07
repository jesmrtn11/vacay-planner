export default ({ variant, class: classProperty, ...props }) => {
  let cssClass = [];
  if (variant)       cssClass.push(variant);
  if (classProperty) cssClass.push(classProperty);
  cssClass = [
    "button",
    ...cssClass
  ];
  return (
    <button class={cssClass.join(" ")} {...props}>
      {props.children}
    </button>
  );
}

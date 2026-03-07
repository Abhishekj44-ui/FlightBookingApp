import * as Icons from "../../assets/icons"

const Icon = ({
  name,
  size = "md",
  color = "text-white",
  className = "",
  ...props
}) => {
  const Component = Icons[name];

  if (!Component) {
    return null;
  }
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  };
  return (
    <Component className={`${sizes[size]} ${color} ${className}`} {...props} />
  );
};

export default Icon;

interface DelayedLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // Add onClick as optional
}

const DelayedLink: React.FC<DelayedLinkProps> = ({
  to,
  className,
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    if (onClick) onClick(); // Call onClick if provided
    setTimeout(() => {
      window.location.href = to; // Perform navigation
    }, 1000); // Delay navigation
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default DelayedLink;

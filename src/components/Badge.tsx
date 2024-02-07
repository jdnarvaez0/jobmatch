interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 text-xs font-medium text-white bg-primary rounded-full ${className}`}
    >
      {children}
    </span>
  );
  
}
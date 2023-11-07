
/**
 * Renders the AuthLayout component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered AuthLayout component.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}

interface LinkListProps {
    links: Array<{ href: string; text: string }>;
  }
  
  export default function LinkList({ links }: LinkListProps) {
    return (
      <ul className="space-y-2 pl-6 font-light relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[#3c3c3c] opacity-30"></div>
        {links.map((link, index) => (
          <li key={index} className="pl-4">
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a href={href} className="block p-8 hover:bg-gray-100 ">
      {text}
    </a>
  );
};

export default LinkButton;

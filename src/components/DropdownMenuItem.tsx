import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  href: string;
  children: ReactNode;
};

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? "bg-purple-200 dark:bg-zinc-700" : "",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}

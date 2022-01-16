import Link from "next/link";
import { MenuItemType } from "../../types/Types";

export default function MenuItem(props: MenuItemType) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={props.url}>
        <a className={`flex flex-col justify-center items-center h-20 w-20`}>
          {props.icone}
          <span className={`text-xs font-light text-gray-600`}>
            {props.texto}
          </span>
        </a>
      </Link>
    </li>
  );
}

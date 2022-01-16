import { useEffect, useState } from "react";
import { MenuItemType } from "../../types/Types";
import { ISair, todosIcones } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const MenuLateral = (props: { menuItens?: MenuItemType[] }) => {
  function buscarIcone(icone: string): any {
    return todosIcones.find((el) => el.key === icone)?.icon;
  }

  function renderizarMenu() {
    return props.menuItens?.map((el, i) => {
      return (
        <MenuItem
          key={Math.floor(Math.random() + 1000) + i}
          url={el.url}
          icone={buscarIcone(el.icone)}
          texto={el.texto}
        />
      );
    });
  }

  return (
    <aside className={`cursor-pointer flex flex-col items-center`}>
      <div
        className={`flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">{renderizarMenu()}</ul>
      <ul>
        <MenuItem icone={ISair.icon} texto="Sair" />
      </ul>
    </aside>
  );
};

export default MenuLateral;

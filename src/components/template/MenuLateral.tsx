import { useEffect, useState } from "react";
import { MenuItemType } from "../../types/Types";
import { ISair, todosIcones } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const MenuLateral = (props: { menuItens?: MenuItemType[] }) => {
  function buscarIcone(icone: string): any {
    return todosIcones.find((el) => el.key === icone)?.icon;
  }

  const renderizarMenu = () => {
    return props.menuItens?.map((el, i) => {
      return (
        <MenuItem
          className={`hover:bg-gradient-to-bl from-purple-500 to-purple-800 hover:text-white`}
          key={Math.floor(Math.random() + 1000) + i}
          url={el.url}
          icone={buscarIcone(el.icone)}
          texto={el.texto}
        />
      );
    });
  };

  function onClickSair() {
    console.log("cliquei aqui");
  }

  return (
    <aside className={`cursor-pointer flex flex-col items-center bg-white dark:bg-slate-900 dark:text-gray-100`}>
      <div
        className={`flex flex-col justify-center items-center bg-gradient-to-tr from-purple-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">{renderizarMenu()}</ul>
      <ul>
        <MenuItem
          className={`text-red-600 dark:text-red-500 hover:bg-gradient-to-bl from-red-500 to-red-800 hover:text-white dark:hover:text-white`}
          icone={ISair.icon}
          texto="Sair"
          onClick={onClickSair}
        />
      </ul>
    </aside>
  );
};

export default MenuLateral;

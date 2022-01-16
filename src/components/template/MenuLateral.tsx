import { useEffect, useState } from "react";
import { MenuItemType } from "../../types/Types";
import { todosIcones } from "../icons";
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
    <aside>
      <ul>{renderizarMenu()}</ul>
    </aside>
  );
};

export default MenuLateral;

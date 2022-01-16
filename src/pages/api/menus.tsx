import type { NextApiRequest, NextApiResponse } from "next";
import { IAjuste, ICasa, ISino } from "../../components/icons";
import { MenuItemType } from "../../types/Types";

const menu = (req: NextApiRequest, res: NextApiResponse<MenuItemType[]>) => {
  res.status(200).json([
    {
      url: "/",
      texto: "Início",
      icone: "casa",
    },
    {
      url: "/ajustes",
      texto: "Ajustes",
      icone: "ajuste",
    },
    {
      url: "/notificacoes",
      texto: "Notificações",
      icone: "sino",
    },
  ]);
};

export default menu;

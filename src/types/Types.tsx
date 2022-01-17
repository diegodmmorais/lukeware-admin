export type ConteudoType = {
  readonly children?: any;
};

export type MenuItemType = {
  readonly url?: string;
  readonly texto: string;
  readonly icone: any;
  readonly onClick?: () => void;
  readonly className?: string;
};

export type TemplateType = {
  readonly titulo: string;
  readonly menuItens?: MenuItemType[];
  readonly subtitulo: string;
  readonly children?: any;
};

export type Tema = "dark" | "light";

export type ContextType = {
  tema?: Tema;
  alterarTema?: () => void;
};

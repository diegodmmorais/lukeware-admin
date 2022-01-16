import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/template/Layout";
import { MenuItemType } from "../types/Types";

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/menus");
  const menuItens = await resp.json();
  return {
    revalidate: 3600,
    props: {
      menuItens,
    },
  };
}

const Notificacoes = (props: { menuItens: MenuItemType[] }) => {
  return (
    <>
      <Head>
        <title>Lukeware Admin</title>
        <meta name="description" content="Notificaçoes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout
          titulo="Notificações"
          subtitulo="Aqui esta suas notificações"
          menuItens={props.menuItens}
        >
          <h3>Notificações</h3>
        </Layout>
      </main>
    </>
  );
};

export default Notificacoes;

import {PropsWithChildren} from "react";
import {type NextPage} from 'next';
import Head from 'next/head';
import Home from "@/pages/home";
import QUFooter from "@/components/footer/footer";
import Header from "@/components/header/header";

export const Layout = ({children}: PropsWithChildren) =>
    <>
        <Head>
            <title>(M)agency</title>

            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="title" content="M agency - Масштабируем ваш бизнес, привлекаем новых клиентов и проводим маркетинговые исследования." />
            <meta
                name="description"
                content="(M)agency - сайт маркетинговой студии, мы занимаемся продвижением в социальных сетях - настраиваем таргетированную рекламу, создаем и публикуем контент, проводим маркетинговые исследования."
            />
            <meta property="og:description" content="(M)agency - сайт маркетинговой студии, мы занимаемся продвижением в социальных сетях - настраиваем таргетированную рекламу, создаем и публикуем контент, проводим маркетинговые исследования." />
            <meta name="keywords" content="Маркетинг, Разработка сайтов, UI/UX, SMM, продвижение в социальных сетях" />
            <meta property="og:image" content="https://m-agancy.vercel.app/logo.svg" />
            <link rel="icon" href="https://m-agancy.vercel.app/logo.svg" />
        </Head>

        <Header />

        <main className="flex min-h-screen flex-col items-center">
            {children}
        </main>

        <QUFooter/>
    </>

const Index: NextPage = () => {
    return (
        <Home/>
    );
};

export default Index;
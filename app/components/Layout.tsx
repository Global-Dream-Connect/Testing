import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Global Dream Connect",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Fresh Minds, Global Futures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">{children}</div>
    </>
  );
};

export default Layout;

import { Layout, LayoutHeader, LayoutTitle } from "@/components/layout/layout";
import { PropsWithChildren } from "react";

export default function CourseLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Cours</LayoutTitle>
      </LayoutHeader>
      {children}
    </Layout>
  );
}

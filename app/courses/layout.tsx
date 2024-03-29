import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { PropsWithChildren } from "react";

export default function CourseLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Mes cours</LayoutTitle>
      </LayoutHeader>

      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
}

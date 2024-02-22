import { Layout, LayoutContent } from "@/components/layout/layout";
import Image from "next/image";

const SettingsPage = () => {
  return (
    <Layout>
      <LayoutContent className="flex flex-col justify-center items-center ">
        <Image
          className=" place-content-center"
          src="/images/travaux.jpg"
          alt="travaux"
          width={500}
          height={100}
        />
        <p>En cours de construction</p>
      </LayoutContent>
    </Layout>
  );
};

export default SettingsPage;

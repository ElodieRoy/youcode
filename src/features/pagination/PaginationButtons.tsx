"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type PaginationButtonsProps = {
  page: number;
  totalPage: number;
  baseUrl: string;
};

const PaginationButtons = ({
  page,
  totalPage,
  baseUrl,
}: PaginationButtonsProps) => {
  const router = useRouter();

  const changeUrlPage = (page: string) => {
    const searchParams = new URLSearchParams({ page: page });
    const url = `${baseUrl}?${searchParams.toString()}`;
    console.log("🌸 ", url);

    router.push(url);
  };

  return (
    <div className="flex justify-end items-center space-x-6 lg:space-x-8">
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {page > totalPage ? totalPage : page} sur {totalPage}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => changeUrlPage(String(1))}
          disabled={page === 1}
        >
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => changeUrlPage(String(page - 1))}
          disabled={page === 1}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => changeUrlPage(String(page + 1))}
          disabled={page === totalPage}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => changeUrlPage(String(totalPage))}
          disabled={page === totalPage}
        >
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
export default PaginationButtons;

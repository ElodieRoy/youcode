"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

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
  const getUrlPage = (page: string) => {
    const searchParams = new URLSearchParams({ page: page });
    return `${baseUrl}?${searchParams.toString()}`;
  };
  return (
    <div className="flex justify-end items-center space-x-6 lg:space-x-8">
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {page > totalPage ? totalPage : page} sur {totalPage}
      </div>
      <div className="flex items-center space-x-2">
        {page === 1 ? (
          <Button className="h-8 w-8 p-0" disabled>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Link
            href={getUrlPage(String(1))}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 p-0",
              page === 1 ? "pointer-events-none" : null
            )}
            replace
            prefetch
            scroll={false}
          >
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Link>
        )}
        {page === 1 ? (
          <Button className="h-8 w-8 p-0" disabled>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Link
            href={getUrlPage(String(page - 1))}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 p-0"
            )}
            replace
            prefetch
            scroll={false}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        )}
        {page === totalPage ? (
          <Button className="h-8 w-8 p-0" disabled>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Link
            href={getUrlPage(String(page + 1))}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 p-0"
            )}
            replace
            prefetch
            scroll={false}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        )}
        {page === totalPage ? (
          <Button className="h-8 w-8 p-0" disabled>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Link
            href={getUrlPage(String(totalPage))}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 p-0"
            )}
            replace
            prefetch
            scroll={false}
          >
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default PaginationButtons;

"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlbumIcon, LogOut, User2 } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

type LoggedInButtonProps = {
  user: Session["user"];
};

export const LoggedInButton = ({ user }: LoggedInButtonProps) => {
  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button size="sm">
            <Avatar className="size-6 mr-2">
              <AvatarFallback>{user.name && user.name?.[0]}</AvatarFallback>
              {user.image && (
                <AvatarImage src={user.image} alt="user picture" />
              )}
            </Avatar>
            {user.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/account">
              <User2 className="mr-2" size={12} />
              Mon compte
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/my-courses">
              <AlbumIcon className="mr-2" size={12} />
              Mes cours
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem>
              <LogOut className="mr-2" size={12} />
              Déconnexion
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Es-tu sûr de vouloir te déconnecter ?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="secondary">Annuler</Button>
            </AlertDialogCancel>
            <LogoutButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};

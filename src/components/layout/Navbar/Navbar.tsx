"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/SearchInput";
import { ModeToggle } from "@/components/theme-toggle";
import { NavMenu } from "./NavMenu";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div className="sticky z-10 top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.svg" alt="Logo" width="40" height="40" />
            <div className="font-bold text-xl">Hotel Booking</div>
          </div>
          <SearchInput />
          <div className="flex items-center gap-3">
            <div>
              <ModeToggle />
              <NavMenu />
            </div>
            <UserButton afterSignOutUrl="/" />
            {!userId && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/sign-in")}
                >
                  Sign In
                </Button>
                <Button size="sm" onClick={() => router.push("/sign-up")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  hrfe: string;
  label: string;
}

const BackButton = ({ hrfe, label }: BackButtonProps) => {
  return (
    <Button className="font-normal w-full" variant="link" size="sm" asChild>
      <Link href={hrfe}>{label}</Link>
    </Button>
  );
};

export default BackButton;

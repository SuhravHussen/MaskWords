"use client";

import { Button } from "@/components/ui/button";

const ButtonClient = ({ children, ...props }) => {
  return (
    <>
      <Button onClick={() => alert("fd")} {...props}>
        {children}
      </Button>
    </>
  );
};

export default ButtonClient;

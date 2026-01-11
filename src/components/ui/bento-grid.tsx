"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 auto-rows-fr gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-sm p-0 bg-white border border-slate-200 justify-between flex flex-col overflow-hidden opacity-100",
        className
      )}
    >
      {header}
      {(title || description || icon) && (
        <div className="group-hover/bento:translate-x-2 transition duration-200 p-4">
          {icon}
          {title && (
            <div className="font-serif font-bold text-[#1a1f3a] mb-2 mt-2">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans font-normal text-slate-600 text-sm">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


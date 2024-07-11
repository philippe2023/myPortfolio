"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export function LinkPreviewButton() {
  return (
                <LinkPreview
                url="/b1.svg"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                <MagicButton 
                    title= "Show my work"
                    icon={<FaLocationArrow />}
                    position='right'
                />
                </LinkPreview>
  );
}

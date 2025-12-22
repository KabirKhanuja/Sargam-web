"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SCALES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function ScaleSelector() {
  return (
    <Select defaultValue="C">
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select Sa" />
      </SelectTrigger>
      <SelectContent>
        {SCALES.map(scale => (
          <SelectItem key={scale} value={scale}>
            {scale} (Sa)
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
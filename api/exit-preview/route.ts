export const dynamic = 'force-static';
// Add this if the error persists:
export const dynamicParams = false;
import { exitPreview } from "@prismicio/next";

export function GET() {
  return exitPreview();
}
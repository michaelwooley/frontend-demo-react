import { SCREEN_BREAKPOINTS } from "common";
import { useWindowDimensions } from "./useWindowDimensions";

export function useIsTablet(): boolean {
  const { width } = useWindowDimensions();

  return width >= SCREEN_BREAKPOINTS.tablet;
}

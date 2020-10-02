import { SCREEN_BREAKPOINTS } from "common";
import { useWindowDimensions } from "./useWindowDimensions";

export function useIsTablet() {
  const { width } = useWindowDimensions();

  return width >= SCREEN_BREAKPOINTS.tablet;
}

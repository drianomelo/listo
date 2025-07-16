import { LongHeader } from "./LongHeader";
import { SmallHeader } from "./SmallHeader";

export const Header = ({ variant }) => {
  return variant === "small" ? <SmallHeader /> : <LongHeader />;
};

import type { FC, ReactNode } from "react";
import { useTable } from "./hooks/useTable";

export interface TableBottomContainerProps {
  children?: ReactNode;
}
export const TableBottomContainer: FC<TableBottomContainerProps> = ({
  children,
}) => {
  const { clearSelection } = useTable();
  return <div>{children}</div>;
};

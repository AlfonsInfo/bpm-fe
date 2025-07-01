"use client";

import { useGetEventList } from "@/hooks/event.query";
import { useState } from "react";
import { Event, GroupCell } from "@/interfaces/dto.interface";
import { Skeleton } from "primereact/skeleton";
import CellCardPage from "./component/CellCardPage";
import { useGetGroupCellList } from "@/hooks/cell.query";

export default function CellPage() {
  const { isFetchingGroupCellList, groupCell } = useGetGroupCellList();

  function CellGridLayout({ children }: {children : React.ReactNode} ){
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {children}
         </div>
    )
  }

  function CellGridSkeleton() {
    return (
      <CellGridLayout>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className=" border rounded shadow">
            <Skeleton width="100%" height="13rem" className="mb-2" />
            <Skeleton width="80%" height="1.5rem" className="m-3 mb-10" />
          </div>
        ))}
        </CellGridLayout>
    );
  }

  return (
    <div className="m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Group Cells</h1>

      {isFetchingGroupCellList && <CellGridSkeleton />}

      {!isFetchingGroupCellList && (
          <CellGridLayout>
            {groupCell?.map((event: GroupCell) => (
              <CellCardPage key={event.id} event={event} />
            ))}
          </CellGridLayout>
      )}
    </div>
  );
}

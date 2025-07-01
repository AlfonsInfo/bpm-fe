"use client";

import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetEventList } from "@/hooks/event.query";
import AddButtonComponent from "@/components/button/add-button/add-button";
import MasterDataHeaderLayout from "@/components/master-layout/header-layout";
import { useEventState } from "@/hooks/event.state";
import CreateEventDialog from "./components/CreateEventDialog";

export default function MasterEventPage() {
  const { isFetchingEvents, events } = useGetEventList(true);
  const [first, setFirst] = useState(0); // indeks awal untuk paginasi
  const [rows, setRows] = useState(10); // jumlah baris per halaman
  
  const {
    visibleEventCreateDialog,
    showCreateDialog, hideDialog
  } = useEventState();

  return (
    <div className="space-y-6 p-6">
      <MasterDataHeaderLayout>
      <h1 className="text-2xl font-bold">Master Event</h1>
      <AddButtonComponent
          className="my-3" 
          label="Add Event" 
          onClick={showCreateDialog}
      />
      </MasterDataHeaderLayout>
        <DataTable
          loading={isFetchingEvents}
          value={events}
          paginator
          rows={rows}
          first={first}
          onPage={(e) => {
            setFirst(e.first);
            setRows(e.rows);
          }}
          className="p-datatable-sm shadow"
        >
          <Column field="name" header="Name" sortable />
          <Column field="category.name"  header="Category" />
          <Column field="event_type" header="Type" />
          <Column field="event_scope" header="Scope" />
          <Column field="start_date" header="Date" />
          <Column header="Action"/>
        </DataTable>
        <>
          <CreateEventDialog  
                visible={visibleEventCreateDialog}
                onHide={hideDialog}
            />
        </>
    </div>
  );
}

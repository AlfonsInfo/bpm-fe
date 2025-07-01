"use client";

import { useParams } from "next/navigation";
import { useGetGroupCellById } from "@/hooks/cell.query";
import PageLoading from "@/components/loading/PageLoading";

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id;
  const { isFetchingGroupCellById, groupCell } = useGetGroupCellById(Number(id));

  if (isFetchingGroupCellById) {
    return <PageLoading />;
  }

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Detail Kelompok Sel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KIRI: Info Umum */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <p className="text-gray-600 font-semibold">Nama Kelompok Sel</p>
            <p className="text-lg">{groupCell?.name ?? "-"}</p>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Deskripsi</p>
            <p className="text-base whitespace-pre-line">{groupCell?.description ?? "-"}</p>
          </div>
        </div>

        {/* KANAN: Anggota */}
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 font-semibold mb-4">Anggota Kelompok</p>
          {groupCell?.members?.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {groupCell.members.map((member: any) => (
                <li key={member.id} className="text-base">
                  {member.name ?? "Nama tidak tersedia"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">Belum ada anggota.</p>
          )}
        </div>
      </div>
    </div>
  );
}



        // Anggota Sel
        // Pertemuan
        // Tujuan Target
        // Absensi
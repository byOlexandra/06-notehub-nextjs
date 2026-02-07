'use client'

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function NoteDetailsClient() {
    const { noteId } = useParams<{ noteId: string }>();
    const { data } = useQuery({
        queryKey: ['note', noteId],
        queryFn: () => fetchNoteById(noteId),
        refetchOnMount: false,
    })
    return (
        <p>{data?.title}</p>
    )
}


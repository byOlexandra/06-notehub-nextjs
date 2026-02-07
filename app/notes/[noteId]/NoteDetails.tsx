// import { fetchNoteById } from "@/lib/api";
// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NoteDetailsClient from "./NoteDetailsClient";

// interface NoteDetalisProps {
//     params: Promise<{ noteId: string }>
// }

// export default async function NoteDetails({ params }: NoteDetalisProps) {
//     const { noteId } = await params;

//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery({
//         queryKey: ['note', noteId],
//         queryFn: () => fetchNoteById(noteId),
//     })

//     return (
//         <HydrationBoundary state={dehydrate(queryClient)}>
//             <NoteDetailsClient />
//         </HydrationBoundary>
//     )
// }
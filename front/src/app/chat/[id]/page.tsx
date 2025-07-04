import ChatBase from '@/components/chat/ChatBase'
import { fetchChats } from '@/fetch/chatsFetch';
import { fetchChatGroup, fetchChatUsers } from '@/fetch/groupFetch'
import { notFound } from 'next/navigation'
import React from 'react'

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: ChatPageProps) {
  if (params.id.length !== 36) {
    return notFound();
  }

  const group: ChatGroupType | null = await fetchChatGroup(params.id);
  if (!group) {
    return notFound();
  }

  const users: GroupChatUserType[] = await fetchChatUsers(params.id);
  const chats: MessageType[] = await fetchChats(params.id);

  return (
    <div>
      <ChatBase users={users} group={group} oldMessages={chats} />
    </div>
  );
}



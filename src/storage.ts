const STORAGE_KEY_NAME = 'sannomiya.dev-votes';

// 投票済みかどうか
export function isVoted(proposalUuid: string): boolean {
  return votedProposalUuids().includes(proposalUuid);
}

// 投票
export function newVote(proposalUuid: string): void {
  const votedUuids = votedProposalUuids();
  votedUuids.push(proposalUuid);
  localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(votedUuids));
}

// 投票済みの提案を一覧取得
function votedProposalUuids(): string[] {
  const votedUuids = localStorage.getItem(STORAGE_KEY_NAME) || JSON.stringify([]);

  return JSON.parse(votedUuids);
}

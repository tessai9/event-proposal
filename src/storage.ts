const STORAGE_KEY_NAME = 'sannomiya.dev-votes';

// voted or not
export function isVoted(proposalUuid: string): boolean {
  return votedProposalUuids().includes(proposalUuid);
}

// add new vote
export function newVote(proposalUuid: string): void {
  const votedUuids = votedProposalUuids();
  votedUuids.push(proposalUuid);
  localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(votedUuids));
}

// get voted proposal uuids
function votedProposalUuids(): string[] {
  console.log(localStorage.getItem(STORAGE_KEY_NAME));
  const votedUuids = localStorage.getItem(STORAGE_KEY_NAME) || JSON.stringify([]);

  return JSON.parse(votedUuids);
}

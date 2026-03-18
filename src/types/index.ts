export interface Place {
  id: number;
  name: string;
  queueCount: number;
  waitTimePerPerson: number;
}

export interface QueueItem extends Place {
  joinedAt: Date;
  position: number;
}

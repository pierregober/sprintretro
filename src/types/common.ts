export interface IBasicRecord {
  /** Creation Date in Unix */
  created?: number;
  /** Primary Key */
  resource_id: ResourceId | number;
  /** Sort Key */
  resource_name: string;
  /** Last Updated Date in Unix */
  updated: number;
  /** Created, Updated, Last Modified, Undetermined Date in Unix */
  timestamp?: number;
}

/** Record Common Name */
export enum ResourceId {
  Certification = "certification",
  Channel = "channel",
  Facility = "facility",
  Gig = "gig",
  Housing = "housing",
  Member = "member",
  Message = "message",
  Specialty = "specialty",
}

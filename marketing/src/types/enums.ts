//export enums const direct
export enum Auth0Role {
  PlatformAdmin = "platform-admin",
  TeamAdmin = "team-admin",
  TeamManager = "team-manager",
  User = "user",
}

export enum MaintenanceStatus {
  Available = "available",
  Loading = "loading",
  Unavailable = "under_maintenance",
}

/** Member Visibility **/
export enum MemberStatus {
  Busy = "busy",
  Offline = "offline",
  Online = "online",
  Unavailable = "unavailable", //
}

/** Record Common Name */
export enum ResourceId {
  Channel = "channel",
  Member = "member",
  Note = "note",
}

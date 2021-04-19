export class Consent {
  id: string;
  name: string;
  email: string;
  recieveNewsLeters: boolean;
  showTargetedAds: boolean;
  visitStatistics: boolean;

  constructor(
    id: string,
    name: string,
    email: string,
    recieveNewsLeters: boolean,
    showTargetedAds: boolean,
    visitStatistics: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.recieveNewsLeters = recieveNewsLeters;
    this.showTargetedAds = showTargetedAds;
    this.visitStatistics = visitStatistics;
  }
}

export interface IBranchResponse {
  message: string;
  data: IBranchData[];
}

export interface IBranchData {
  name: string;
  commit: ICommit;
  protected: boolean;
}

export interface ICommit {
  sha: string;
  url: string;
}

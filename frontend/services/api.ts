import { IBranchResponse } from '@/interface/branchInterface';
import { ICommitResponse } from '@/interface/commitInterface';
import Axios from 'axios';

const axiosClient = Axios.create({
  baseURL: process.env.BACKEND_HOST || 'http://localhost:3001',
});

export const getBranches = async (): Promise<IBranchResponse> => {
  const response = await axiosClient.get('/github/branch');
  return response.data;
};

export const getCommits = async (name: string): Promise<ICommitResponse> => {
  const response = await axiosClient.get(`/github/commit/${name}`);
  return response.data;
};

'use client';

import { IBranchData } from '@/interface/branchInterface';
import { ICommitData } from '@/interface/commitInterface';
import { getBranches, getCommits } from '@/services/api';
import { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Home() {
  const [branches, setBranches] = useState<IBranchData[]>([]);
  const [commit, setCommit] = useState<ICommitData[]>([]);

  const handleBranch = async () => {
    try {
      const branchResponse = await getBranches();
      setBranches(branchResponse.data);
    } catch (err) {
      if (err instanceof AxiosError) return console.log(err.message);
      console.log(err);
    }
  };

  const handleCommit = async (branch: string) => {
    try {
      const commitResponse = await getCommits(branch);
      setCommit(commitResponse.data);
    } catch (err) {
      if (err instanceof AxiosError) return console.log(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    handleBranch();
  }, []);

  const options = branches.map((item, key) => (
    <option key={key} value={item.name}>
      {item.name}
    </option>
  ));

  const cards = branches.map((item, key) => <div key={key}>{item.name}</div>);

  return (
    <div>
      <div>
        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleCommit(e.target.value)}>{options}</select>
        <button>Reload</button>
      </div>
      <div>{cards}</div>
    </div>
  );
}

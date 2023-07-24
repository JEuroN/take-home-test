'use client';

import { Cards } from '@/components/cards';
import { ReloadIcon } from '@/components/icons/reloadIcon';
import { IBranchData } from '@/interface/branchInterface';
import { ICommitData } from '@/interface/commitInterface';
import { getBranches, getCommits } from '@/services/api';
import { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Home() {
  const [branches, setBranches] = useState<IBranchData[]>([]);
  const [commits, setCommit] = useState<ICommitData[]>([]);
  const [branch, setBranch] = useState('');

  const handleBranch = async () => {
    try {
      const branchResponse = await getBranches();
      setBranches(branchResponse.data);
    } catch (err) {
      if (err instanceof AxiosError) return console.log(err.message);
      console.log(err);
    }
  };

  const handleCommit = async () => {
    try {
      if (!branch) return setCommit([]);
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

  useEffect(() => {
    handleCommit();
  }, [branch]);

  const options = branches.map((item, key) => (
    <option key={key} value={item.name}>
      {item.name}
    </option>
  ));

  const cards = commits.map((item, key) => <Cards card={item} key={`${key}_${key}`} />);

  return (
    <div>
      <div className="header">
        <select className="select" onChange={(e: ChangeEvent<HTMLSelectElement>) => setBranch(e.target.value)}>
          <option></option>
          {options}
        </select>
        <button className="reloadButton" onClick={handleCommit}>
          <ReloadIcon />
        </button>
      </div>
      {commits.length ? <div className={'container'}>{cards}</div> : null}
    </div>
  );
}

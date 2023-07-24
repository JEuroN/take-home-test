import { ICommitData } from '@/interface/commitInterface';
import Image from 'next/image';
import { ExternalIcon } from './icons/externalIcon';

interface ICard {
  card: ICommitData;
}

export const Cards = ({ card, card: { commit } }: ICard) => {
  const date = new Date(commit.author.date);

  const handleUrl = (url: string) => {
    window.open(url);
  };
  return (
    <div className="cardContainer">
      <div className={'cardSection'}>
        <Image src="https://avatars.githubusercontent.com/u/47049540?v=4" alt="profile" width={30} height={30} />
        <div>
          <span>Name:</span> {commit.author.name}
        </div>
        <div>Date: {date.toLocaleDateString()}</div>
      </div>
      <div className="commentSection">
        <span>Comment: </span>
        {commit.message}
      </div>
      <div>
        <button className={'externalIcon'} onClick={() => handleUrl(card.html_url)}>
          <ExternalIcon />
        </button>
      </div>
    </div>
  );
};

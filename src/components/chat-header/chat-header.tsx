import classNames from 'classnames/bind';
import { type ChangeEvent, useState } from 'react';
import { LogoIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { Select } from '@/components/select/select';

import styles from './chat-header.module.css';

const cx = classNames.bind(styles);

const TOPICS = [
  { value: 'javascript-core', label: 'JavaScript Core' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
];

const DIFFICULTIES = [
  { value: 'junior', label: 'Junior' },
  { value: 'middle', label: 'Middle' },
  { value: 'senior', label: 'Senior' },
];

type ChatHeaderProps = {
  onStart: (topic: string, difficulty: string) => void;
};

export const ChatHeader = ({ onStart }: ChatHeaderProps) => {
  const [topic, setTopic] = useState(TOPICS[0].value);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0].value);

  const handleTopicChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setTopic(event.target.value);
  };

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setDifficulty(event.target.value);
  };

  const handleStart = (): void => {
    onStart(topic, difficulty);
  };

  const currentTopicLabel = TOPICS.find((item) => item.value === topic)?.label ?? '';

  return (
    <div className={cx('chat-header')}>
      <div className={cx('info')}>
        <div className={cx('avatar')}>
          <LogoIcon className={cx('avatar-icon')} />
        </div>
        <div className={cx('meta')}>
          <h2 className={cx('title')}>AI Интервьюер</h2>
          <p className={cx('topic')}>{currentTopicLabel}</p>
        </div>
      </div>

      <div className={cx('controls')}>
        <Select options={TOPICS} value={topic} onChange={handleTopicChange} />
        <Select options={DIFFICULTIES} value={difficulty} onChange={handleDifficultyChange} />

        <Button color="gradient" size="small" onClick={handleStart}>
          Поехали!
        </Button>
      </div>
    </div>
  );
};

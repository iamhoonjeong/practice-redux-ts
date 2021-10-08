import React, { FormEvent, ChangeEvent, useState } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameProps = {
  onSubmitUsername: (username: string) => void;
};

const GithubUsernameForm = ({ onSubmitUsername }: GithubUsernameProps) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={input}
        placeholder="input gibhub username"
      />
      <button type="submit">enter</button>
    </form>
  );
};

export default GithubUsernameForm;

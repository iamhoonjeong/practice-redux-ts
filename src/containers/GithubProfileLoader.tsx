import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';
import { getUserProfileAsync } from '../modules/github';

const GithubProfileLoader = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile,
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
  };
  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>loading...</p>}
      {error && <p style={{ textAlign: 'center' }}>error alert!</p>}
      {data && (
        <GithubProfileInfo
          name={data.name}
          bio={data.bio}
          blog={data.blog}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
};

export default GithubProfileLoader;

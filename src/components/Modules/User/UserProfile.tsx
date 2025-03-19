"use client";

import React, { FC, memo } from "react";
import useGetUser from "@/hooks/user/use-get-user";
import Loading from "@/components/Shared/Loading";
import ErrorMessage from "@/components/Shared/ErrorMessage";

type UserProfileProps = {
  userId: string;
};

const UserProfile: FC<UserProfileProps> = memo(({ userId }) => {
  const { user, loading, error } = useGetUser(userId);

  const { name, email, age } = user || {};

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  return (
    user && (
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    )
  );
});

export default UserProfile;

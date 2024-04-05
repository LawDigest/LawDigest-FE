import http from '@/api/config/core';
import { FollowingCongressmanResponse, FollowingPartyResponse, UserInfoResponse } from '@/types';

export const getUserInfo = async () =>
  http.get<UserInfoResponse>({
    url: `/user/info`,
  });

export const getFollowingParty = async () =>
  http.get<FollowingPartyResponse>({
    url: `/user/following/party`,
  });

export const getFollowingCongressman = async () =>
  http.get<FollowingCongressmanResponse>({
    url: `/user/liking/congressman`,
  });

export const postLogout = () => {
  http.post({
    url: `/logout`,
  });
};

import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
  | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (...parameters: ParametersGetServerSession) => {
  const session = await getServerSession(...parameters, authOptions);
  return session;
};

export const getConnectedUser = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getServerSession(...parameters, authOptions);

  if (!session?.user.id) {
    throw new Error('Unauthorized');
  }

  return session.user as {
      id: string;
      email?: string;
      image?: string;
      name?: string;
    };
  }
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';

const GET_HELLO = gql`
  query Query {
    getHello
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_HELLO,
  });

  return { props: { title: data.getHello } };
};

const Home: NextPage<{ title: string }> = ({ title }) => {
  return <p style={{ textAlign: 'center' }}>{`messege: ${title}`}</p>;
};

export default Home;

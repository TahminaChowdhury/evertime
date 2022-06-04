import { MongoClient } from 'mongodb';
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import Products from '../components/Watches/Watches';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>EverTime</title>
      </Head>
      <Banner></Banner>
      <Products watches ={props.watches}></Products>
    </>
  );
}

export async function getStaticProps() {

 const client = await MongoClient.connect('mongodb+srv://everTime:8lzxUPBJYax99W4h@cluster0.ckcl0.mongodb.net/?retryWrites=true&w=majority');
 const db = client.db('everTime');
 const watchesCollection = db.collection('watchesCollection');
 const watches = await watchesCollection.find().toArray();

  return{
    props:{
      watches: watches.map(watch => ({
        name: watch.name,
        img1: watch.name,
        brand: watch.brand,
        price: watch.price,
        id: watch._id.toJSON()
      }))
    },
  revalidate: 10
  }
}
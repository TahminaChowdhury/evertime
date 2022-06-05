import WatchDeatils from '../../components/Watches/WatchDeatils';
import { MongoClient, ObjectId } from 'mongodb';

export default function WatchDetailsPage(props) {
  return <WatchDeatils watches={props.watches}
  ></WatchDeatils>;
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    'mongodb+srv://everTime:8lzxUPBJYax99W4h@cluster0.ckcl0.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db('everTime');

  const watchesCollection = db.collection('watchesCollection');

  const watches = await watchesCollection.find({}, { _id: 1 }).toArray();

  client.close();
  
  return {
    fallback: false,
    paths: watches.map((watch) => ({
      params: 
        {
          watchId: watch._id.toString(),
        },
    })),
  };
}
export async function getStaticProps(context) {

  const watchId = context.params.watchId; 
  console.log(watchId)
  const client = await MongoClient.connect(
    'mongodb+srv://everTime:8lzxUPBJYax99W4h@cluster0.ckcl0.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db('everTime');

  const watchesCollection = db.collection('watchesCollection');

  const watches = await watchesCollection.findOne({ _id: ObjectId(watchId) });

  client.close();
  return {
    props: {
      watches: {
        id: watches._id.toString(),
        name: watches.name,
        brand: watches.brand,
        img1: watches.img1,
        img2: watches.img2,
        img3: watches.img3,
        price: watches.price,
        description: watches.description,
      },
    },
  };
}

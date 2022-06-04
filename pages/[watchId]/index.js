import WatchDeatils from "../../components/Watches/WatchDeatils";
import { useRouter } from 'next/router';

export function WatchDetailsPage() {
    const router = useRouter();
    return <WatchDeatils></WatchDeatils>
}

export async function getStaticPaths() {
    return {
        fallback: true,
        props: [
            {
                params:{
                    watchId: id,
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
const watchId = context.params.watchId;
    return{
        props:{

        }
    }
}
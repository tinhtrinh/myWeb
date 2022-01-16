import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router"

import Button from '@material-ui/core/Button';

import ChapterList from '../../../components/chapter-list' 

const AccountProduct = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Link href={{
                    pathname: 'add/chapter',
                    query: { pid: id }
                }}>
                    <Button>Thêm chương</Button>
            </Link>

            <ChapterList pid={id}/>
        </div>
    )
}

export default AccountProduct;
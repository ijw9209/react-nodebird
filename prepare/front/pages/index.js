//next는 import 구문이 필요없다.
//pages 는 무조건 이름이 pages여야 함.
//components 폴더등 다른것들은 상관없음 무조건 pages 만!!
// 스크립트를 실행하는 명력어가 package.json에 있는 dev임

import AppLayout from '../components/AppLayout';
const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;
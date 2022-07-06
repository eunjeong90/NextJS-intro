import { useRouter } from "next/router";
import Seo from "../../Components/Seo";

export default function Detail({params}) {
  const router = useRouter();
  //아래 코드는 시크릿창에서 실행이 안되는데 router.query.params는 아직 백엔드 즉 서버에 존재하지 않기때문
  // const [title, id] = router.query.params;

  const [title, id] = params || [] ;
  return (
    <div>
      <Seo />
      <h4>{title}</h4>
    </div> 
  );
}

export function getServerSideProps ({params : {params}}) {
  return {
    props: {
      params,
    },
  }
}
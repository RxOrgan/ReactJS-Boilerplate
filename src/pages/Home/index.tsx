// libs
import { Link } from "react-router-dom";
// hocs
import { withLoadingMini } from "@/hocs/withLoading";
// hooks
import useFetchPageData from "./hooks/useFetchPageData";
// others
import { ROUTERS } from "@/constants/routers";

export default function Home() {
  const { isLoading } = useFetchPageData();

  return withLoadingMini(isLoading)(
    <div>
      <Link to={ROUTERS.BUILDER}>Go to builder</Link>
    </div>,
  );
}

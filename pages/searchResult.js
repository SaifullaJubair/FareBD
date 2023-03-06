import SearchResult from "@/Components/SearchResult/SearchResult";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function searchResult() {
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();
  //   const data = router.query;
  useEffect(() => {
    setSearchData(JSON.parse(router.query.data));
  }, [router.query]);
  return <SearchResult searchData={searchData} />;
}

export default searchResult;

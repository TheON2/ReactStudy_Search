import {MainContainer, SearchInput, SearchResult, SearchResultItem, Suggestion, Title} from "./style";
import useInput from "../../hooks/useInput";
import {useCallback, useEffect} from "react";
import useMutate from "../../hooks/useMutate";
import {
  getBlogSearch,
  getBookSearch,
  getCafeSearch,
  getImageSearch,
  getPostSearch,
  getVideoSearch
} from "../../api/search";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, searchResult} from "../../redux/reducers/searchSlice";

const keyArr =[
  '감자탕','감자국','감자그라탕','감자찌개','눈을감자','사감자리'
]
//검색어를 포함하는 문자열

const Main = () => {
  const category = Number(useSelector(state=>state.search.category))
  const data = useSelector(state=>state.search.data)
  const dispatch = useDispatch()
  const [keyword,onKeyword,setKeyword] = useInput('')
  const [wordArr,onWordArr,setWordArr] = useInput([])
  const [resultArr,onResultArr,setResultArr] = useInput([])
  const search_PostMutate = useMutate(getPostSearch,'search',searchResult)
  const search_VideoMutate = useMutate(getVideoSearch,'search',searchResult)
  const search_ImageMutate = useMutate(getImageSearch,'search',searchResult)
  const search_BlogMutate = useMutate(getBlogSearch,'search',searchResult)
  const search_BookMutate = useMutate(getBookSearch,'search',searchResult)
  const search_CafeMutate = useMutate(getCafeSearch,'search',searchResult)

  useEffect(()=>{
    if(keyword.length>=2) setWordArr(keyArr.filter((a)=>a.includes(keyword)));
    else setWordArr([])
  },[keyword])

  useEffect(() => {
    console.log(wordArr);
  }, [wordArr]);

  useEffect(() => {
    if(data!==null)
    setResultArr(data)
  }, [data,resultArr]);

  const submitSearch = useCallback((e)=>{
    e.preventDefault();
    console.log(category,keyword)
    switch (category){
      case 1: search_PostMutate.mutate(keyword); break;
      case 2: search_VideoMutate.mutate(keyword); break;
      case 3: search_ImageMutate.mutate(keyword); break;
      case 4: search_BlogMutate.mutate(keyword); break;
      case 5: search_BookMutate.mutate(keyword); break;
      case 6: search_CafeMutate.mutate(keyword); break;
    }
    setKeyword('')
  },[category, keyword, search_PostMutate, search_VideoMutate, search_ImageMutate, search_BlogMutate, search_BookMutate, search_CafeMutate])

  const onClickKeyword = useCallback((word)=>{
    return () => setKeyword(word);
  },[setKeyword]);

  return (
      <MainContainer>
        <Title>
          <span>D</span>
          <span>A</span>
          <span>U</span>
          <span>M</span>
        </Title>
        <form onSubmit={submitSearch}>
          <SearchInput  value={keyword} onChange={onKeyword}/>
          {wordArr.map((word, index) => <Suggestion onClick={onClickKeyword(word)} key={index}>{word}</Suggestion>)}
        </form>
        <SearchResult>
          {category==1 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <div dangerouslySetInnerHTML={{ __html: result.title }} />
            <a href={result.url}>링크 바로가기</a>
            <div dangerouslySetInnerHTML={{ __html: result.contents }} />
          </SearchResultItem >)}
          {category==2 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <img src={result.thumbnail}/>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <div dangerouslySetInnerHTML={{ __html: result.title }} />
            <a href={result.url}>링크 바로가기</a>
          </SearchResultItem >)}
          {category==3 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <img src={result.thumbnail_url}/>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <a href={result.doc_url}>링크 바로가기</a>
          </SearchResultItem >)}
          {category==4 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <img src={result.thumbnail}/>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <div dangerouslySetInnerHTML={{ __html: result.title }} />
            <a href={result.url}>링크 바로가기</a>
            <div dangerouslySetInnerHTML={{ __html: result.contents }} />
          </SearchResultItem >)}
          {category==5 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <img src={result.thumbnail}/>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <div dangerouslySetInnerHTML={{ __html: result.title }} />
            <a href={result.url}>링크 바로가기</a>
            <div dangerouslySetInnerHTML={{ __html: result.contents }} />
          </SearchResultItem >)}
          {category==6 && resultArr.map((result) => <SearchResultItem  key={result.url}>
            <img src={result.thumbnail}/>
            <h3>{new Date(result.datetime).toLocaleDateString()}</h3>
            <div dangerouslySetInnerHTML={{ __html: result.title }} />
            <a href={result.url}>링크 바로가기</a>
            <div dangerouslySetInnerHTML={{ __html: result.contents }} />
          </SearchResultItem >)}
        </SearchResult>
      </MainContainer>
  )
}

export default Main
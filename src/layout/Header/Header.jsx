import {HeaderContainer, StyledOption, StyledSelect} from "./style";
import useInput from "../../hooks/useInput";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeCategory} from "../../redux/reducers/searchSlice";

const Header =()=>{
  const dispatch = useDispatch();
  const [category,onChangeCategory] = useInput(1);
  useEffect(()=>{
    dispatch(changeCategory(category))
  },[category])

  return(
    <HeaderContainer>
      <StyledSelect value={category} onChange={onChangeCategory}>
        <StyledOption value={1}>통합검색</StyledOption>
        <StyledOption value={2}>동영상</StyledOption>
        <StyledOption value={3}>이미지</StyledOption>
        <StyledOption value={4}>블로그</StyledOption>
        <StyledOption value={5}>책</StyledOption>
        <StyledOption value={6}>카페글</StyledOption>
      </StyledSelect>
    </HeaderContainer>
  )
}

export default Header
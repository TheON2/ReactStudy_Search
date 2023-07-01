import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: transparent;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  span:nth-child(1) {
    color: steelblue;
  }
  span:nth-child(2) {
    color: greenyellow;
  }
  span:nth-child(3) {
    color: yellow;
  }
  span:nth-child(4) {
    color: red;
  }
  font-size: 60px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
`;

export const Suggestion = styled.div`
  display: flex;
  position: relative;
  border: black 2px solid;
  padding: 0.5em;
  margin: 0.5em 0;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

export const SearchResult = styled.div`
  margin-top: 2em;
`;

export const SearchResultItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1em 0;
`;
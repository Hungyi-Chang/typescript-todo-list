import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%:
  height:100%;
  background: #fff;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:;
  object-fit: cover;
  background: #fff;
`;

export const TodoListWrapper = styled.div`
   position: relative;
   margin: 120px auto;
  max-width: 400px;
  width:100%;
  background:#AACDE5;
  border-radius: 8px;
  padding: 25px;
`;

export const Header = styled.header`
  font-size: 3rem;
  font-weight: 600;
`;



export const ListContainer = styled.ul`
  max-height: 250px;
  overflow-y: auto;
`;

export const SpanList = styled.span`
 position: absolute;
 right: -45px;
 background: #FFD4DB;
 color: #BD97CB;
 width: 45px;
 text-align: center;
 border-radius: 0 3px 3px 0;
 cursor: pointer;
 transition: all 0.3s ease;
`

export const ListItem = styled.li`
  list-style: none;
  height: 45px;
  line-height: 45px;
  position: relative;
  color: #41729F;
  background: #f2f2f2;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 0 15px;
  cursor: default;
  overflow: hidden;
  &:hover ${SpanList}{
        right: 0px;
    }
`;



export const Footer = styled.div`
display: flex;
width: 100%;
margin-top: 25px;
align-items: center;
justify-content: space-between;
`;

export const ButtonClear = styled.button`
  border: none;
  outline: none;
  background:#E3EFF9;
  color: #3F92B7;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 6px 15px;
`;
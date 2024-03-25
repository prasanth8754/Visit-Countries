import styled from 'styled-components'

// {
//   BgCont,
//   Cont,
//   Heading,
//   UlContriesCont,
//   UlVisitedCont,
// }

export const BgCont = styled.div`
    background-color:#161624;
    min-height:100vh;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    padding-top:10px;
    padding-bottom:10px;
`
export const Cont = styled.div`
    width:90%;
`
export const Heading = styled.h1`
    color:#f8fafc;
    font-size:25px;
    margin:${props => props.noView && 'auto'};
`
export const UlContriesCont = styled.ul`
    list-style-type:none;
    padding-left:0px;
    overflow-y:scroll;
    height:40vh;
    border:1px solid #334155;
    border-radius:10px;
`
export const UlVisitedCont = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    align-items:center;
    gap:20px;
    flex-wrap:wrap;
`

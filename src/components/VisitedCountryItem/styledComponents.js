import styled from 'styled-components'

// {
//   ListItem,
//   Img,
//   InsideCont,
//   RemoveButton,
//   Paragraph,
// }

export const ListItem = styled.li`
    background-color:#1f1f2f;
    width:230px;
    height:100%;
`
export const Img = styled.img`
    width:100%;
`
export const InsideCont = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
`
export const RemoveButton = styled.button`
    background:transparent;
    width:80px;
    height:35px;
    color:#ffffff;
    border:1px solid #cbd5e1;
    outline:none;
    border-radius:5px;
    cursor:pointer;
`
export const Paragraph = styled.p`
    color:#f1f5f9;
    font-size:15px;
`

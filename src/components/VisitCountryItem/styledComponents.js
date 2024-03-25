import styled from 'styled-components'

// {LiItem, Para, Button}

export const LiItem = styled.li`
    background-color:#1f1f2f;
    width:100%;
    padding:5px;
    padding-left:30px;
    padding-right:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid #334155;
`
export const Para = styled.p`
    color:${props => (props.isVisited ? '#94a3b8' : '#f1f5f9')};
    font-size:17px;
    padding-right:${props => (props.isVisited ? '15px' : '0px')};
`
export const Button = styled.button`
    background-color:#3b82f6;
    width:80px;
    height:35px;
    color:#ffffff;
    border:0px;
    outline:none;
    border-radius:5px;
    cursor:pointer;
`

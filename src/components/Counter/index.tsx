import * as C from './styles';

type Props = {
    title: string,
    number: number
}

export const Counter = ({ title, number}: Props) => {
    return (
        <C.Container>
            <p>{number}</p>
            <h3>{title}</h3>
        </C.Container>
    )
}